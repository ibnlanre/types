import { describe, expectTypeOf, it } from "vitest";
import type { TimeZoneBreak } from "./TimeZoneBreak";

describe("TimeZoneBreak", () => {
  it("should set the timezone value when the token is positive", () => {
    type Result = TimeZoneBreak<"+13:00">;
    expectTypeOf<Result>().toEqualTypeOf<{
      timezone: "+13:00";
    }>();
  });

  it("should set the timezone value when the token is negative", () => {
    type Result = TimeZoneBreak<"-09:00">;
    expectTypeOf<Result>().toEqualTypeOf<{
      timezone: "-09:00";
    }>();
  });

  it("should handle unknown token format", () => {
    type Result = TimeZoneBreak<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<"'abc' is not a valid timezone token.">();
  });
});
