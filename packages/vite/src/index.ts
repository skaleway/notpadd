import path from "node:path";
import { Plugin, UserConfig, ResolvedConfig } from "vite";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

export * from "notpadd";

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

async function loadConfig(configPath: string): Promise<any> {
  if (!existsSync(configPath)) {
    throw new Error(`Notpadd config file not found at: ${configPath}`);
  }

  try {
    const config = await import(configPath);
    const configModule = config.default || config;

    if (configModule.notpadd && typeof configModule.notpadd === "function") {
      return await configModule.notpadd();
    }

    if (typeof configModule === "function") {
      return await configModule();
    }

    return configModule;
  } catch (error) {
    throw new Error(
      `Failed to load Notpadd config: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export default function notpaddPlugin(
  options: Partial<NotpaddOptions> = {}
): Plugin {
  const pluginOptions = { ...defaultOptions, ...options };

  function isEnabled(config: UserConfig | ResolvedConfig): boolean {
    return options.isEnabled ? options.isEnabled(config) : true;
  }

  return {
    name: "notpadd",

    config(config) {
      const root = config.root || process.cwd();
      const configPath = resolveConfigPath(root, pluginOptions.configPath);
      const directory = path.resolve(
        path.dirname(configPath),
        "./.notpadd/generated"
      );

      const configPatch: Partial<UserConfig> = {
        optimizeDeps: {
          exclude: ["notpadd"],
        },
        resolve: {
          alias: {
            notpadd: directory,
          },
        },
      };

      if (config.server?.fs?.allow?.length) {
        configPatch.server = {
          fs: {
            allow: [...config.server.fs.allow, directory],
          },
        };
      }

      return configPatch;
    },

    async configResolved(config: ResolvedConfig) {
      if (!isEnabled(config)) {
        return;
      }

      const configPath = resolveConfigPath(
        config.root,
        pluginOptions.configPath
      );
      console.log(
        "Starting notpadd with config",
        path.relative(process.cwd(), configPath)
      );

      try {
        const notpaddConfig = await loadConfig(configPath);
        console.log("Loaded notpaddConfig:", notpaddConfig);

        if (notpaddConfig?.collections) {
          for (const collection of notpaddConfig.collections) {
            console.log("Processing collection:", collection);
          }
        }
      } catch (error) {
        console.error("Error in notpadd plugin:", error);
        throw error;
      }
    },
  };
}
