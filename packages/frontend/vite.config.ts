import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "./docs", // Output directory for GitHub Pages
  },
  base: "./", // Base path for GitHub Pages
  server: {
    host: "127.0.0.1",
  },
});
