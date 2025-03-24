import axios from "axios";
import fs from "fs";
import path from "path";
import { ConfigType } from "src/types/index.js";

// Helper function to create a folder if it doesn't exist
export function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function createJsonFiles(outputDir: string, data: any[]) {
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
