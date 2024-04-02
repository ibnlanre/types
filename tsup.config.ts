import { defineConfig, Options } from "tsup";

const esm: Options = {
  format: ["esm"],
  dts: true,
  clean: true,
  entry: ["src/index.ts"],
  outDir: "dist/esm",
  minify: true,
  minifyIdentifiers: false,
};

const cjs: Options = {
  format: ["cjs"],
  dts: true,
  clean: true,
  entry: ["src/index.ts"],
  outDir: "dist/cjs",
  minify: true,
  minifyIdentifiers: false,
};

export default defineConfig([esm, cjs]);
