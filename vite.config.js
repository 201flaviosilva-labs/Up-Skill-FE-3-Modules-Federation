import federation from "@originjs/vite-plugin-federation";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      remotes: {
        products: "http://[::]:3000/remoteEntry.js",
      }
    })
  ],
});
