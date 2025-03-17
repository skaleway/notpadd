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

// Helper function to create MDX files
function createMdxFiles(outputDir: string, data: any[]) {
  if (!Array.isArray(data)) {
    throw new Error("Expected an array of objects, but received invalid data.");
  }

  // Helper: Ensure a directory exists
  function ensureDirectoryExists(dir: string) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  // Store unique field types
  const typeDefinitions = new Map<string, Set<string>>();

  data.forEach((item, index) => {
    const typeName = item.eventType || "UnknownType";
    const typeDir = path.join(outputDir, typeName);

    ensureDirectoryExists(typeDir); // Create type-specific folder

    // Build MDX front matter (without curly braces)
    const frontMatter = Object.entries(item)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join("\n");

    // Save MDX file
    const filePath = path.join(typeDir, `file-${index + 1}.mdx`);
    const mdxContent = `---\n${frontMatter}\n---\n`;

    fs.writeFileSync(filePath, mdxContent, "utf-8");
    console.log(`✅ Created MDX file: ${filePath}`);

    // Extract field types dynamically
    if (!typeDefinitions.has(typeName)) {
      typeDefinitions.set(typeName, new Set());
    }

    Object.keys(item).forEach((key) => {
      const value = item[key];
      let valueType = "unknown";

      if (typeof value === "string") {
        valueType = "string";
      } else if (typeof value === "number") {
        valueType = "number";
      } else if (typeof value === "boolean") {
        valueType = "boolean";
      } else if (Array.isArray(value)) {
        valueType = "any[]";
      } else if (typeof value === "object" && value !== null) {
        valueType = "Record<string, any>";
      }

      typeDefinitions.get(typeName)?.add(`${key}: ${valueType};`);
    });
  });

  // Generate TypeScript definitions
  let typeFileContent = `// Auto-generated Notpadd types\n\n`;

  typeDefinitions.forEach((fields, typeName) => {
    typeFileContent += `export type ${typeName} = {\n  ${[...fields].join("\n  ")}\n};\n\n`;
  });

  // Write TypeScript types to file
  const typeFilePath = path.join(outputDir, "types.ts");
  fs.writeFileSync(typeFilePath, typeFileContent, "utf-8");
  console.log(`✅ Generated TypeScript definitions at ${typeFilePath}`);
}

// function generateTypeDefinition(data: any[]) {
//   const typeDefinitions = new Map<string, Set<string>>();

//   data.forEach((item) => {
//     const typeName = item.eventType || "UnknownType";

//     if (!typeDefinitions.has(typeName)) {
//       typeDefinitions.set(typeName, new Set());
//     }

//     Object.keys(item).forEach((key) => {
//       const value = item[key];
//       let valueType = "unknown";

//       if (typeof value === "string") {
//         valueType = "string";
//       } else if (typeof value === "number") {
//         valueType = "number";
//       } else if (typeof value === "boolean") {
//         valueType = "boolean";
//       } else if (Array.isArray(value)) {
//         valueType = "any[]";
//       } else if (typeof value === "object" && value !== null) {
//         valueType = "Record<string, any>";
//       }

//       typeDefinitions.get(typeName)?.add(`${key}: ${valueType};`);
//     });
//   });

//   let output = `// Auto-generated Notpadd types\n\n`;

//   typeDefinitions.forEach((fields, typeName) => {
//     output += `export type ${typeName} = {\n  ${[...fields].join("\n  ")}\n};\n\n`;
//   });

//   return output;
// }

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
