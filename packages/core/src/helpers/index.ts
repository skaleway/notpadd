import axios from "axios";
import fs from "fs";
import path from "path";
import { ConfigType } from "src/types/index.js";
import { createJsonFiles, ensureDirectoryExists } from "./create-json.js";

const BACKEND_SERVER = "https://knull.vercel.app/api/knull/";
const NOTPADD_DIR = path.join(process.cwd(), ".notpadd");
const ALL_CONTENT_FILE = path.join(NOTPADD_DIR, "allContent.js");
const GITIGNORE_FILE = path.join(process.cwd(), ".gitignore");

export async function createNotpaddConfig({
  spaceId,
  spaceSecrete,
  publishOnly,
  outputDir,
}: ConfigType) {
  if (!spaceId || !spaceSecrete) {
    throw new Error("No spaceId or spaceSecrete provided in Notpadd config.");
  }

  try {
    console.log("🔗 Fetching data from Notpadd server...");

    const { data, status, statusText } = await axios.get(
      `${BACKEND_SERVER}${spaceId}`
    );

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${statusText}`);
    }

    // Ensure output directory exists
    ensureDirectoryExists(outputDir);

    if (Array.isArray(data.data)) {
      createJsonFiles(outputDir, data.data);
      generateNotpaddContent(data.data);
      console.log("✅ Data fetched successfully!");
    } else {
      throw new Error("Data from Notpadd server is not an array.");
    }
  } catch (error: any) {
    console.error(`❌ Error in createNotpaddConfig: ${error.message}`);
    throw error;
  }
}

function generateNotpaddContent(data: any[]) {
  if (!fs.existsSync(NOTPADD_DIR)) {
    fs.mkdirSync(NOTPADD_DIR, { recursive: true });
  }

  // Format the content as a JavaScript file
  const fileContent = `export default ${JSON.stringify(data, null, 2)};`;

  fs.writeFileSync(ALL_CONTENT_FILE, fileContent, "utf-8");
  console.log("✅ Generated: .notpadd/allContent.js");

  updateGitignore();
}

function updateGitignore() {
  if (fs.existsSync(GITIGNORE_FILE)) {
    const gitignoreContent = fs.readFileSync(GITIGNORE_FILE, "utf-8");

    if (!gitignoreContent.includes(".notpadd")) {
      fs.appendFileSync(GITIGNORE_FILE, "\n.notpadd/\n");
      console.log("✅ Updated .gitignore to exclude .notpadd/");
    }
  } else {
    fs.writeFileSync(GITIGNORE_FILE, ".notpadd/\n");
    console.log("✅ Created .gitignore and excluded .notpadd/");
  }
}
