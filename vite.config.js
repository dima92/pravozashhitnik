import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/pravozashhitnik/",
  server: {
    host: true,
    port: 3000,
    open: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "${resolve(__dirname, "src/styles/_variables.scss").replace(/\\/g, "/")}" as *;
          @use "${resolve(__dirname, "src/styles/helpers/_index.scss").replace(/\\/g, "/")}" as *;
        `,
      },
    },
  },

  build: {
    minify: "esbuild",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
