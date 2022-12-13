import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svgLoader from "vite-plugin-svelte-svg";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), svgLoader()],
});
