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

function createJsonFiles(outputDir: string, data: any[]) {
  ensureDirectoryExists(outputDir);

  data.forEach((item) => {
    if (!item.id) {
      console.warn(`⚠️ Skipping item without id`);
      return;
    }

    // Generate a filename based on the id (sanitized)
    const fileName = item.id.toLowerCase().replace(/\s+/g, "-") + ".json";
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, JSON.stringify(item, null, 2), "utf-8");
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

  console.log({
    spaceId,
    spaceSecrete,
    publishOnly,
    outputDir,
  });

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
      console.log("✅ Data fetched successfully!");
    } else {
      throw new Error("Data from Notpadd server is not an array.");
    }
  } catch (error: any) {
    console.error(`❌ Error in createNotpaddConfig: ${error.message}`);
    throw error;
  }
}
