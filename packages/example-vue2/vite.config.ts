import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    createHtmlPlugin({
      inject: {
        tags: [
          {
            injectTo: 'head-prepend',
            tag: 'script',
            children: 'window.process = {env: {VUE2: true}};'
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
