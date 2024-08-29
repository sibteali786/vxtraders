import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [basicSsl(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "./docs", // Output directory for GitHub Pages
  },
  base: "./", // Base path for GitHub Pages
});
