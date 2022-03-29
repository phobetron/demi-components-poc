import { fileURLToPath, URL } from "url";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "../library/dist/vue3",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "../library/src/index.ts"),
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
  plugins: [tsConfigPaths(), vue()],
});
