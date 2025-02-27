import axios from "axios";
import fs from "fs";
import path from "path";
import { ConfigType } from "src/types/index.js";

const BACKEND_SERVER =
  "https://knull.vercel.app/api/knull/user_2skl9lnGj6mC916PFm9Z8y1Y8hh";

// Helper function to create a folder if it doesn't exist
function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Helper function to create MDX files
function createMdxFiles(outputDir: string, data: any[]) {
  ensureDirectoryExists(outputDir);

  data.forEach((item, index) => {
    const filePath = path.join(outputDir, `file-${index + 1}.mdx`);
    const content = `---\n${JSON.stringify(item, null, 2)}\n---\n`;

    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Created MDX file: ${filePath}`);
  });
}

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

    const { data, status, statusText } = await axios.get(BACKEND_SERVER);

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${statusText}`);
    }

    console.log("✅ Data fetched successfully!");

    // Ensure output directory exists
    ensureDirectoryExists(outputDir);

    // Generate MDX files
    if (Array.isArray(data.data)) {
      createMdxFiles(outputDir, data.data);
    } else {
      throw new Error("Data from Notpadd server is not an array.");
    }

    return data.data;
  } catch (error: any) {
    console.error(`❌ Error in createNotpaddConfig: ${error.message}`);
    throw error;
  }
}
