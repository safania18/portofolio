import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: "webp",
        quality: "30",
      }),
    }),
  ],
  base: mode === "gh-pages" ? "/portofolio/" : "/",
  
}));
