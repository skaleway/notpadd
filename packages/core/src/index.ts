import { NextConfig } from "next";
import fs from "fs";
import path from "path";

export * from "./helpers/index.js";

type Options = {
  configPath: string;
};

const defaultOptions: Options = {
  configPath: "notpadd.config.js",
};

const initializedState: Record<string, boolean> = {};

export function createNotpaddCollection(pluginOptions: Options) {
  return async (
    nextConfig: Partial<NextConfig> | Promise<Partial<NextConfig>> = {}
  ): Promise<Partial<NextConfig>> => {
    const [command] = process.argv
      .slice(2)
      .filter((arg) => !arg.startsWith("-"));

    const configFilePath = path.resolve(
      process.cwd(),
      pluginOptions.configPath
    );
    const configExists = fs.existsSync(configFilePath);

    if (!configExists) {
      if (command === "dev") {
        console.warn(
          `⚠️  Notpadd warning: Config file '${pluginOptions.configPath}' not found.`
        );
      } else if (command === "build") {
        console.error(
          `❌ Notpadd error: Config file '${pluginOptions.configPath}' not found. Exiting...`
        );
        process.exit(1);
      }
    }

    // Dynamically import the config file
    let notpaddConfig: any;
    try {
      notpaddConfig = (await import(configFilePath)).notpadd;
      if (typeof notpaddConfig !== "function") {
        throw new Error(
          "The exported value from notpadd.config.ts must be a function named 'notpadd'."
        );
      }
    } catch (error: any) {
      console.error(`❌ Failed to load Notpadd config: ${error.message}`);
      process.exit(1);
    }

    // Execute the Notpadd function
    await notpaddConfig();

    if (command === "build" || command === "dev") {
      const initialized = initializedState[pluginOptions.configPath];
      if (initialized) {
        return nextConfig;
      }
    }

    initializedState[pluginOptions.configPath] = true;
    return nextConfig;
  };
}
export const withNotpadd = createNotpaddCollection(defaultOptions);
