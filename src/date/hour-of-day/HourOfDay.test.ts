import { describe, expectTypeOf, it } from "vitest";
import { HourOfDay } from "./HourOfDay";

describe("HourOfDay", () => {
  it("should correctly infer the output type for 12-hour format", () => {
    type Result = HourOfDay<"22", 12>;
    expectTypeOf<Result>().toEqualTypeOf<10>();
  });

  it("should correctly infer the output type for 24-hour format", () => {
    type Result = HourOfDay<"22">;
    expectTypeOf<Result>().toEqualTypeOf<22>();
  });

  it("should correctly infer the output type for 12-hour format with 0", () => {
    type Result = HourOfDay<"00", 12>;
    expectTypeOf<Result>().toEqualTypeOf<12>();
  });

  it("should correctly infer the output type for 24-hour format with 0", () => {
    type Result = HourOfDay<"00">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
