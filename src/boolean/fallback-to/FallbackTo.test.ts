import { describe, expectTypeOf, test } from "vitest";
import type { FallbackTo } from "./FallbackTo";

describe("FallbackTo", () => {
  test("should return the fallback value if the input value is undefined", () => {
    expectTypeOf<FallbackTo<undefined, string>>().toMatchTypeOf<string>();
  });

  test("should return the input value if it is not undefined", () => {
    expectTypeOf<FallbackTo<42, number>>().toEqualTypeOf<42>();
  });

  test("should handle complex types", () => {
    type Input = { name: string } | undefined;
    type Fallback = { name: string; age: number };
    type Result = FallbackTo<Input, Fallback>;

    expectTypeOf<Result>().toMatchTypeOf<{
      name: string;
    }>();
  });
});
