import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint],
  base: "/",
  build: {
    outDir: "dist", // Adjust the output directory as needed
    assetsDir: "assets", // Adjust the assets directory as needed
  },
});
