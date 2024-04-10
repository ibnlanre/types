import { describe, expectTypeOf, test } from "vitest";
import { TrimLeadingZeros } from "./TrimLeadingZeros";

describe("TrimLeadingZeros", () => {
  test("TrimLeadingZeros should remove leading zeros from a string", () => {
    type Result = TrimLeadingZeros<"00100">;
    expectTypeOf<Result>().toEqualTypeOf<"100">();
  });

  test("TrimLeadingZeros should handle strings without leading zeros", () => {
    type Result = TrimLeadingZeros<"1234">;
    expectTypeOf<Result>().toEqualTypeOf<"1234">();
  });

  test("TrimLeadingZeros should handle empty string inputs", () => {
    type Result = TrimLeadingZeros<"">;
    expectTypeOf<Result>().toEqualTypeOf<"">();
  });

  test("TrimLeadingZeros should handle strings with only zeros", () => {
    type Result = TrimLeadingZeros<"0000">;
    expectTypeOf<Result>().toEqualTypeOf<"">();
  });

  test("TrimLeadingZeros should handle strings with trailing zeros", () => {
    type Result = TrimLeadingZeros<"1000">;
    expectTypeOf<Result>().toEqualTypeOf<"1000">();
  });
});
