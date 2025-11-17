import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["node_modules"],
    typecheck: {
      include: ["src/**/*.test.ts"],
      tsconfig: "./tsconfig.json",
    },
  },
});
