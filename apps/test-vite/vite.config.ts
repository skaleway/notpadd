import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import notpadd from "notpadd-vite"
import type { PluginOption } from "vite"
import path from "node:path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), notpadd() as PluginOption],
  resolve: {
    alias: {
      "@notpadd": path.resolve(__dirname, ".notpadd"),
    },
  },
})
