import { fileURLToPath, URL } from "url";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vue from '@vitejs/plugin-vue';
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "../library/src/lib/index.ts"),
      name: "Library",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
        },
      },
    },
  },
  plugins: [tsConfigPaths(), vue(), dts()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
