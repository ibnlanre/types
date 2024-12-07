import { describe, expectTypeOf, test } from "vitest";
import type { TrimTrailingZeros } from "./TrimTrailingZeros";

describe("TrimTrailingZeros", () => {
  test("TrimTrailingZeros should remove trailing zeros from a string", () => {
    type Result = TrimTrailingZeros<"1000">;
    expectTypeOf<Result>().toEqualTypeOf<"1">();
  });

  test("TrimTrailingZeros should handle strings without trailing zeros", () => {
    type Result = TrimTrailingZeros<"1234">;
    expectTypeOf<Result>().toEqualTypeOf<"1234">();
  });

  test("TrimTrailingZeros should handle empty string inputs", () => {
    type Result = TrimTrailingZeros<"">;
    expectTypeOf<Result>().toEqualTypeOf<"">();
  });

  test("TrimTrailingZeros should handle strings with only zeros", () => {
    type Result = TrimTrailingZeros<"0000">;
    expectTypeOf<Result>().toEqualTypeOf<"">();
  });

  test("TrimTrailingZeros should handle strings with leading zeros", () => {
    type Result = TrimTrailingZeros<"00100">;
    expectTypeOf<Result>().toEqualTypeOf<"001">();
  });
});
