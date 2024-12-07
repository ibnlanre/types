import { describe, expectTypeOf, test } from "vitest";
import type { Json } from "./Json";

describe("Json", () => {
  test("Json should allow primitive values", () => {
    const value = "hello" satisfies Json;
    expectTypeOf(value).toEqualTypeOf<string>();
  });

  test("Json should allow object values", () => {
    const value = { name: "John", age: 30 } satisfies Json;
    expectTypeOf(value).toEqualTypeOf<{ name: string; age: number }>();
  });

  test("Json should allow array values", () => {
    const value = [1, 2, 3] satisfies Json;
    expectTypeOf(value).toEqualTypeOf<number[]>();
  });
});
