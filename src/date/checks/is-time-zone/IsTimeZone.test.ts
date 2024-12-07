import { describe, expectTypeOf, it } from "vitest";
import type { IsTimeZone } from "./IsTimeZone";

describe("IsTimeZone", () => {
  it("should match the correct timezone format", () => {
    type Result = IsTimeZone<"+00:00">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should match the correct timezone format with offset", () => {
    type Result = IsTimeZone<"+05:00">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should match the correct timezone format with negative offset", () => {
    type Result = IsTimeZone<"-03:00">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should handle invalid timezone format", () => {
    type Result = IsTimeZone<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
