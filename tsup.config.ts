import { defineConfig, Options } from "tsup";

const esm: Options = {
  format: ["esm"],
  dts: true,
  clean: true,
  entry: ["src/index.ts"],
  outDir: "dist/esm",
};

const cjs: Options = {
  format: ["cjs"],
  dts: true,
  clean: true,
  entry: ["src/index.ts"],
  outDir: "dist/cjs",
};

export default defineConfig([esm, cjs]);
