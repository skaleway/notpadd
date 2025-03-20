import axios from "axios";
import fs from "fs";
import path from "path";
import { ConfigType } from "src/types/index.js";

const BACKEND_SERVER = "https://knull.vercel.app/api/knull/";

// Helper function to create a folder if it doesn't exist
function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
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

    const { data, status, statusText } = await axios.get(
      `${BACKEND_SERVER}${spaceId}`
    );

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${statusText}`);
    }

    console.log("✅ Data fetched successfully!");

    // Ensure output directory exists
    ensureDirectoryExists(outputDir);

    // Generate MDX files
    if (Array.isArray(data.data)) {
    } else {
      throw new Error("Data from Notpadd server is not an array.");
    }

    return data.data;
  } catch (error: any) {
    console.error(`❌ Error in createNotpaddConfig: ${error.message}`);
    throw error;
  }
}
