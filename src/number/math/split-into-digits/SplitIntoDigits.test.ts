import { describe, expectTypeOf, test } from "vitest";
import type { SplitIntoDigits } from "./SplitIntoDigits";

describe("SplitIntoDigits", () => {
  test("SplitIntoDigits should split a string of digits into an array of individual digits", () => {
    type Result = SplitIntoDigits<"12345">;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3, 4, 5]>();
  });

  test("SplitIntoDigits should handle empty string inputs", () => {
    type Result = SplitIntoDigits<"">;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  test("SplitIntoDigits should handle single-digit inputs", () => {
    type Result = SplitIntoDigits<"7">;
    expectTypeOf<Result>().toEqualTypeOf<[7]>();
  });

  test("SplitIntoDigits should handle inputs with leading zeros", () => {
    type Result = SplitIntoDigits<"00123">;
    expectTypeOf<Result>().toEqualTypeOf<[0, 0, 1, 2, 3]>();
  });

  test("SplitIntoDigits should handle inputs with non-digit characters", () => {
    type Result = SplitIntoDigits<"12a34">;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });
});
