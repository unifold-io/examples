import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const solanaStub = fileURLToPath(new URL("./src/stubs/solana.js", import.meta.url));

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@solana/web3.js": solanaStub,
      "@solana/spl-token": solanaStub,
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  ssr: {
    noExternal: ["@unifold/connect-svelte"],
    external: ["@unifold/ui-web"],
  },
});
