import type { NextConfig } from "next"
import fs from "fs"
import path from "path"

export * from "./helpers/index.js"

type Options = {
  configPath: string
}

const defaultOptions: Options = {
  configPath: "notpadd.config.js",
}

const initializedState: Record<string, boolean> = {}

// Create Notpadd Collection
export function createNotpaddCollection(pluginOptions: Options) {
  return async (
    nextConfig: Partial<NextConfig> | Promise<Partial<NextConfig>> = {},
  ): Promise<NextConfig> => {
    const resolvedConfig = (await Promise.resolve(nextConfig)) as NextConfig
    const [command] = process.argv.slice(2).filter(arg => !arg.startsWith("-"))

    const configFilePath = path.resolve(process.cwd(), pluginOptions.configPath)
    const configExists = fs.existsSync(configFilePath)

    if (!configExists) {
      if (command === "dev") {
        console.warn(`⚠️  Notpadd warning: Config file '${pluginOptions.configPath}' not found.`)
      } else if (command === "build") {
        console.error(`❌ Notpadd error: Config file '${pluginOptions.configPath}' not found.`)
        process.exit(1)
      }
      return resolvedConfig
    }

    let notpaddConfig: any
    try {
      notpaddConfig = (await import(configFilePath)).notpadd
      if (typeof notpaddConfig !== "function") {
        throw new Error(
          "The exported value from notpadd.config.ts must be a function named 'notpadd'.",
        )
      }
    } catch (error: any) {
      console.error(`❌ Failed to load Notpadd config: ${error.message}`)
      return resolvedConfig
    }

    await notpaddConfig()

    if (command === "build" || command === "dev") {
      if (initializedState[pluginOptions.configPath]) {
        return resolvedConfig
      }
    }

    initializedState[pluginOptions.configPath] = true
    console.log("🚀 Notpadd initialized!")

    return resolvedConfig
  }
}

export const withNotpadd = createNotpaddCollection(defaultOptions)
