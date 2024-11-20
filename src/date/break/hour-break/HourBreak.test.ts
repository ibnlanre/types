import { describe, expectTypeOf, it } from "vitest";
import type { HourBreak } from "./HourBreak";

describe("HourBreak", () => {
  it("should set the hour value when the token is in the correct format", () => {
    type Result = HourBreak<"T12:">;
    expectTypeOf<Result>().toEqualTypeOf<{ hour: "12" }>();
  });

  it("should handle unknown token format", () => {
    type Result = HourBreak<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<"The token provided is not a valid hour.">();
  });
});
