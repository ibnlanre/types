import { describe, expectTypeOf, test } from "vitest";
import type { DigitsToUnsignedFloat } from "./DigitsToUnsignedFloat";

describe("DigitsToUnsignedFloat", () => {
  test("DigitsToUnsignedFloat should convert digits to unsigned float with specified decimal places", () => {
    type Result = DigitsToUnsignedFloat<[1, 2, 3], 2>;
    expectTypeOf<Result>().toEqualTypeOf<[[1], [2, 3]]>();
  });

  test("DigitsToUnsignedFloat should handle empty fractional digits", () => {
    type Result = DigitsToUnsignedFloat<[1, 2, 3], 0>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], []]>();
  });

  test("DigitsToUnsignedFloat should handle decimal places greater than the number of fractional digits", () => {
    type Result = DigitsToUnsignedFloat<[0, 0, 1, 2, 3], 5>;
    expectTypeOf<Result>().toEqualTypeOf<[[0], [0, 0, 1, 2, 3]]>();
  });

  test("DigitsToUnsignedFloat should handle decimal places less than the number of fractional digits", () => {
    type Result = DigitsToUnsignedFloat<[1, 2, 3, 4, 5], 2>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5]]>();
  });

  test("DigitsToUnsignedFloat should handle single digit input", () => {
    type Result = DigitsToUnsignedFloat<[0, 0, 9], 3>;
    expectTypeOf<Result>().toEqualTypeOf<[[0], [0, 0, 9]]>();
  });
});
