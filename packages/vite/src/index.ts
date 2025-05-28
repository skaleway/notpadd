import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Plugin, ResolvedConfig, UserConfig } from "vite";

export { createNotpaddConfig } from "notpadd";

export interface NotpaddOptions {
  configPath: string;
  isEnabled?: (config: UserConfig | ResolvedConfig) => boolean;
}

const defaultOptions: NotpaddOptions = {
  configPath: "notpadd.config.js",
};

function resolveConfigPath(root: string, configPath: string): string {
  return path.isAbsolute(configPath)
    ? configPath
    : path.resolve(root, configPath);
}

async function loadNotpaddConfig(configPath: string): Promise<any> {
  if (!existsSync(configPath)) {
    console.error(
      `\n❌ notpadd.config.js not found\n   Create a notpadd.config.js file in your project root\n`,
    );
    process.exit(1);
  }

  try {
    const configModule = await import(pathToFileURL(configPath).href);

    if (!configModule.notpadd || typeof configModule.notpadd !== "function") {
      console.error(
        `\n❌ export const notpadd not found or invalid in notpadd.config.js\n`,
      );
      process.exit(1);
    }

    return await configModule.notpadd();
  } catch (error) {
    console.error(
      `\n❌ Failed to load notpadd.config.js\n   ${(error as Error).message}\n`,
    );
    process.exit(1);
  }
}

export default function notpaddPlugin(
  options: Partial<NotpaddOptions> = {},
): Plugin {
  const pluginOptions = { ...defaultOptions, ...options };

  return {
    name: "notpadd",

    config(userConfig) {
      const root = userConfig.root || process.cwd();
      const configPath = resolveConfigPath(root, pluginOptions.configPath);
      const aliasTarget = path.resolve(path.dirname(configPath), "./.notpadd");
      const aliasName = "@notpadd";

      const configPatch: Partial<UserConfig> = {
        resolve: {
          alias: {
            "@notpadd": aliasTarget, // e.g., path to `.notpadd/generated`
          },
        },
        server: {
          fs: {
            allow: [aliasTarget],
          },
        },
        optimizeDeps: {
          exclude: ["@notpadd"],
        },
      };

      // Merge if `server.fs.allow` already exists
      if (userConfig.server?.fs?.allow?.length) {
        configPatch.server!.fs!.allow = [
          ...new Set([...userConfig.server.fs.allow, aliasTarget]),
        ];
      }

      return configPatch;
    },

    async configResolved(config: ResolvedConfig) {
      const shouldEnable = pluginOptions.isEnabled
        ? pluginOptions.isEnabled(config)
        : true;

      if (!shouldEnable) return;

      const configPath = resolveConfigPath(
        config.root,
        pluginOptions.configPath,
      );
      const notpaddConfig = await loadNotpaddConfig(configPath);

      console.log("✅ Notpadd config loaded successfully\n");

      if (Array.isArray(notpaddConfig?.collections)) {
        for (const collection of notpaddConfig.collections) {
          console.log(`⚡ Processing collection: ${collection}`);
          // Your logic here
        }
      } else {
        console.warn("⚠️ No collections found in Notpadd config.\n");
      }
    },

    async buildStart() {
      console.log("🚀 Starting Notpadd build...");
    },

    async buildEnd() {
      console.log("🌟 Notpadd build completed successfully!");
    },
  };
}
