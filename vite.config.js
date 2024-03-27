import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      BsScss: resolve(__dirname, "node_modules/bootstrap/scss"),
      bsJs: resolve(__dirname, "node_modules/bootstrap/js/dist/"),
    },
  }
});
