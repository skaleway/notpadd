import path from "node:path";
import { Plugin, UserConfig } from "vite";

export type Options = {
  configPath: string;
  isEnabled?: (config: UserConfig) => boolean;
};

const defaultOptions = {
  configPath: "notpadd.config.js",
};

function resolveConfigPath(root: string, configPath: string) {
  if (!path.isAbsolute(configPath)) {
    configPath = path.resolve(root, configPath);
  }
  return configPath;
}

export default function notpaddPlugin(options: Partial<Options> = {}): Plugin {
  const pluginOptions = { ...defaultOptions, ...options };

  return {
    name: "notpadd",
    configResolved(config) {
      const configPath = resolveConfigPath(
        config.root,
        pluginOptions.configPath
      );
    },
  };
}
