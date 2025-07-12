import { describe, expectTypeOf, it } from "vitest";
import type { HourBreak } from "./HourBreak";

describe("HourBreak", () => {
  it("should set the hour value when the token is in the correct format", () => {
    type Result = HourBreak<"T12:">;
    expectTypeOf<Result>().toEqualTypeOf<{ hour: "12" }>();
  });

  it("should set the hour value when the token is in the correct format with additional properties", () => {
    type Result = HourBreak<"T12:", { minute: "30" }>;
    expectTypeOf<Result>().toEqualTypeOf<{ hour: "12"; minute: "30" }>();
  });

  it("should handle tokens without 'T' prefix", () => {
    type Result = HourBreak<"12:">;
    expectTypeOf<Result>().toEqualTypeOf<"'12:' is not a valid hour token.">();
  });

  it("should handle unknown token format", () => {
    type Result = HourBreak<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<"'abc' is not a valid hour token.">();
  });
});
