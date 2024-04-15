import { defineConfig, Options } from "tsup";

const build: Options = {
  format: ["esm"],
  dts: true,
  clean: true,
  entry: ["src/index.ts"],
};

export default defineConfig([build]);
