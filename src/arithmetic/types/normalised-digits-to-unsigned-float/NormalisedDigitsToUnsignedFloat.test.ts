import { describe, expectTypeOf, test } from "vitest";
import { NormalisedDigitsToUnsignedFloat } from "./NormalisedDigitsToUnsignedFloat";

describe("NormalisedDigitsToUnsignedFloat", () => {
  test("NormalisedDigitsToUnsignedFloat should convert digits to unsigned float with specified decimal places", () => {
    type Result = NormalisedDigitsToUnsignedFloat<[1, 2, 3], 2>;
    expectTypeOf<Result>().toEqualTypeOf<[[1], [2, 3]]>();
  });

  test("NormalisedDigitsToUnsignedFloat should handle empty fractional digits", () => {
    type Result = NormalisedDigitsToUnsignedFloat<[1, 2, 3], 0>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], []]>();
  });

  test("NormalisedDigitsToUnsignedFloat should handle decimal places greater than the number of fractional digits", () => {
    type Result = NormalisedDigitsToUnsignedFloat<[0, 0, 1, 2, 3], 5>;
    expectTypeOf<Result>().toEqualTypeOf<[[0], [0, 0, 1, 2, 3]]>();
  });

  test("NormalisedDigitsToUnsignedFloat should handle decimal places less than the number of fractional digits", () => {
    type Result = NormalisedDigitsToUnsignedFloat<[1, 2, 3, 4, 5], 2>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5]]>();
  });

  test("NormalisedDigitsToUnsignedFloat should handle single digit input", () => {
    type Result = NormalisedDigitsToUnsignedFloat<[0, 0, 9], 3>;
    expectTypeOf<Result>().toEqualTypeOf<[[0], [0, 0, 9]]>();
  });
});
