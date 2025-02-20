import { NextConfig } from "next";

type Options = {
  configPath: string;
};

const defaultOptions: Options = {
  configPath: "notpadd.config.ts",
};

const initializedState: Record<string, boolean> = {};

export function createNotpaddCollection(pluginOptions: Options) {
  return async (
    nextConfig: Partial<NextConfig> | Promise<Partial<NextConfig>> = {}
  ): Promise<Partial<NextConfig>> => {
    const [command] = process.argv
      .slice(2)
      .filter((arg) => !arg.startsWith("-"));
    if (command === "build" || command === "dev") {
      const initialized = initializedState[pluginOptions.configPath];

      if (initialized) {
        return nextConfig;
      }
    }

    initializedState[pluginOptions.configPath] = true;

    console.log("Notpadd is viewing");

    return nextConfig;
  };
}

export const withNotpadd = createNotpaddCollection(defaultOptions);
