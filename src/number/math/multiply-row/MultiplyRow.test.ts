import { describe, expectTypeOf, test } from "vitest";
import type { MultiplyRow } from "./MultiplyRow";

describe("MultiplyRow", () => {
  test("MultiplyRow should multiply each digit in the row by the multiplier", () => {
    type Result = MultiplyRow<[1, 2, 3], 2>;
    expectTypeOf<Result>().toEqualTypeOf<[2, 4, 6]>();
  });

  test("MultiplyRow should handle carry-in and carry-out correctly", () => {
    type Result = MultiplyRow<[9, 9, 9], 2>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 9, 9, 8]>();
  });

  test("MultiplyRow should handle empty row inputs", () => {
    type Result = MultiplyRow<[], 2>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  test("MultiplyRow should handle zero multiplier", () => {
    type Result = MultiplyRow<[1, 2, 3], 0>;
    expectTypeOf<Result>().toEqualTypeOf<[0, 0, 0]>();
  });
});
