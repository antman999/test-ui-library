import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { createStyleImportPlugin } from 'vite-plugin-style-import';

import * as packageJson from "./package.json";

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'meridian-ui',
          resolveStyle: (name) => `./src/components/${name}/${name}.css`,
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "meridian-ui",
      formats: ["es", "cjs"],
      fileName: (format) =>
        `meridian-ui.${
          format === "cjs" ? "cjs" : "es.js"
        }`,
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // Inline dynamic imports (including CSS) into the component file
      },
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies),
    },
    esbuild: {
      minify: true,
    },
  },
}));