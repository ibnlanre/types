import { defineConfig, type Options } from "tsup";

const build: Options = {
  format: ["esm"],
  dts: true,
  clean: true,
  entry: ["src/index.ts"],
  treeshake: true,
  bundle: true,
  minify: true,
};

export default defineConfig([build]);
