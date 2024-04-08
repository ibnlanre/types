import { describe, expectTypeOf, test } from "vitest";
import { UnsignedFloat } from "./UnsignedFloat";

describe("UnsignedFloat", () => {
  test("UnsignedFloat should create an unsigned float type with integers and fractions", () => {
    type Result = UnsignedFloat<[1, 2, 3], [4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5, 6]]>();
  });

  test("UnsignedFloat should handle empty integers and fractions", () => {
    type Result = UnsignedFloat<[], []>;
    expectTypeOf<Result>().toEqualTypeOf<[[], []]>();
  });

  test("UnsignedFloat should handle integers only", () => {
    type Result = UnsignedFloat<[1, 2, 3], []>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], []]>();
  });

  test("UnsignedFloat should handle fractions only", () => {
    type Result = UnsignedFloat<[], [4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<[[], [4, 5, 6]]>();
  });
});
