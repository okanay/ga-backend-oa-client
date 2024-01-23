import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// import tsConfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
