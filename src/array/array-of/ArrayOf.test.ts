import { describe, expectTypeOf, test } from "vitest";
import type { ArrayOf } from "./ArrayOf";

describe("ArrayOf", () => {
  test("creates tuple of specified length and type", () => {
    type Result = ArrayOf<3, string>;
    expectTypeOf<Result>().toEqualTypeOf<[string, string, string]>();
  });

  test("length zero yields empty tuple", () => {
    type Result = ArrayOf<0, number>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  test("default element type is any", () => {
    type Result = ArrayOf<2>;
    expectTypeOf<Result>().toEqualTypeOf<[any, any]>();
  });

  test("works with boolean type", () => {
    type Result = ArrayOf<4, boolean>;
    expectTypeOf<Result>().toEqualTypeOf<
      [boolean, boolean, boolean, boolean]
    >();
  });

  test("works with complex element type", () => {
    type Result = ArrayOf<2, { a: number }>;
    expectTypeOf<Result>().toExtend<[{ a: number }, { a: number }]>();
  });
});
