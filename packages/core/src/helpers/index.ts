import axios, { AxiosError } from "axios"
import fs from "fs"
import path from "path"
import { ConfigType } from "src/types/index.js"
import { ensureDirectoryExists } from "./create-json.js"
import { Article } from "@workspace/db"

/**
 * @description This file contains functions to fetch data from the Notpadd server and generate the necessary files for Notpadd.
 * @author Notpadd Team
 * @license MIT
 * @version 1.0.0
 */

// const DemoUrl = "https://knull.vercel.app/api/knull/";

const BACKEND_SERVER = "https://notpadd-web.vercel.app/api/v1/articles"

const NOTPADD_DIR = path.join(process.cwd(), ".notpadd")
const GENERATED_DIR = path.join(NOTPADD_DIR, "generated")
const ALL_CONTENT_FILE = path.join(GENERATED_DIR, "allContent.js")
const INDEX_FILE = path.join(NOTPADD_DIR, "index.js")
const GITIGNORE_FILE = path.join(process.cwd(), ".gitignore")

class ContentVisibilityError extends Error {
  details: string[]
  constructor(message: string, details: string[]) {
    super(message)
    this.name = "ContentVisibilityError"
    this.details = details
  }
}

export async function createNotpaddConfig({
  all,
  outputDir,
  publicKey,
  secreteKey,
  privateOnly,
  publishOnly,
}: ConfigType) {
  if (!publicKey || !secreteKey) {
    throw new Error("No publicKey or spaceSecrete provided in Notpadd config.")
  }

  try {
    console.log("🔗 Fetching data from Notpadd server...")
    if (!all && !privateOnly && !publishOnly) {
      publishOnly = true
    }

    // Validate content visibility flags
    const validateVisibilityFlags = () => {
      const errors = []

      if (all && privateOnly) {
        errors.push("Cannot fetch both all content and private-only content simultaneously")
      }

      if (privateOnly && publishOnly) {
        errors.push("Cannot fetch both private-only and published-only content")
      }

      if (errors.length > 0) {
        throw new ContentVisibilityError("Invalid content visibility configuration", errors)
      }
    }

    // Set mutually exclusive flags
    if (all) privateOnly = false
    if (privateOnly) all = false
    if (publishOnly) privateOnly = false

    validateVisibilityFlags()

    const { data, status, statusText } = await axios.get(BACKEND_SERVER, {
      headers: {
        "Content-Type": "application/json",
        teamId: publicKey,
        secret: secreteKey,
        all,
        privateOnly,
        publishOnly,
      },
    })

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${statusText}`)
    }

    ensureDirectoryExists(outputDir)

    if (Array.isArray(data.articles)) {
      generateNotpaddContent(data.articles)
    } else {
      throw new Error("Data from Notpadd server is not an array.")
    }
  } catch (error: any) {
    if (error instanceof AxiosError) {
      console.error(`❌ Error in createNotpaddConfig: ${error.message}`)
    } else {
      console.error(`❌ Error in createNotpaddConfig: ${error}`)
    }
  }
}

/**
 * @description This function generates the necessary files for Notpadd.
 * @param {any[]} data - The data to generate the files from.
 * @author Notpadd Team
 * @license MIT
 * @version 1.0.0
 */
export function generateNotpaddContent(data: Article[]) {
  // Ensure .notpadd and generated directories exist
  if (!fs.existsSync(NOTPADD_DIR)) {
    fs.mkdirSync(NOTPADD_DIR, { recursive: true })
  }
  if (!fs.existsSync(GENERATED_DIR)) {
    fs.mkdirSync(GENERATED_DIR, { recursive: true })
  }

  // Read existing slugs if the file exists
  let existingData: any[] = []
  if (fs.existsSync(ALL_CONTENT_FILE)) {
    try {
      // Remove 'export default' and parse JSON
      const file = fs.readFileSync(ALL_CONTENT_FILE, "utf-8")
      const match = file.match(/^export default (.*);$/s)
      if (match && typeof match[1] === "string") {
        existingData = JSON.parse(match[1])
      }
    } catch (e) {
      console.warn("⚠️  Could not parse existing allContent.js, proceeding as if empty.")
    }
  }

  // Build sets of slugs for comparison
  const getSlug = (item: any) => item.slug
  const existingSlugs = new Set(existingData.map(getSlug))
  // const incomingSlugs = new Set(data.map(getSlug));

  const newSlugs = data.filter(item => !existingSlugs.has(getSlug(item)))

  if (newSlugs.length === 0 && existingData.length === data.length) {
    return
  }

  const mergedDataMap = new Map(existingData.map(item => [getSlug(item), item]))
  for (const item of data) {
    mergedDataMap.set(getSlug(item), item)
  }
  const mergedData = Array.from(mergedDataMap.values())

  console.log(`Updating allContent.js with ${mergedData.length} articles`)

  const fileContent = `export default ${JSON.stringify(mergedData, null, 2)};`
  fs.writeFileSync(ALL_CONTENT_FILE, fileContent, "utf-8")

  const indexContent = `import allContents from "./generated/allContent.js";\n\nexport { allContents };`
  fs.writeFileSync(INDEX_FILE, indexContent, "utf-8")

  updateGitignore()
}

function updateGitignore() {
  if (fs.existsSync(GITIGNORE_FILE)) {
    const gitignoreContent = fs.readFileSync(GITIGNORE_FILE, "utf-8")

    if (!gitignoreContent.includes(".notpadd")) {
      fs.appendFileSync(GITIGNORE_FILE, "\n.notpadd/\n")
      console.log("✅ Updated .gitignore to exclude .notpadd/")
    }
  } else {
    fs.writeFileSync(GITIGNORE_FILE, ".notpadd/\n")
    console.log("✅ Created .gitignore and excluded .notpadd/")
  }
}
