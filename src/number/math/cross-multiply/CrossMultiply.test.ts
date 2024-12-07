import { describe, expectTypeOf, test } from "vitest";
import type { CrossMultiply } from "./CrossMultiply";

describe("CrossMultiply", () => {
  test("CrossMultiply should multiply two digit arrays correctly", () => {
    type Result = CrossMultiply<[1, 2, 3], [4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<[5, 6, 0, 8, 8]>();
  });

  test("CrossMultiply should handle empty left array", () => {
    type Result = CrossMultiply<[], [4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<[0]>();
  });

  test("CrossMultiply should handle empty right array", () => {
    type Result = CrossMultiply<[1, 2, 3], []>;
    expectTypeOf<Result>().toEqualTypeOf<[0]>();
  });

  test("CrossMultiply should handle empty left and right arrays", () => {
    type Result = CrossMultiply<[], []>;
    expectTypeOf<Result>().toEqualTypeOf<[0]>();
  });
});
