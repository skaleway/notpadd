import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import notpadd from "notpadd-vite";
import type { PluginOption } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), notpadd()] as PluginOption[],
});
