import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // ✅ Correct alias
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // ✅ Netlify will use this
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "./src/index.html"), // ✅ Corrected path!
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
