import { describe, expectTypeOf, it } from "vitest";
import type { DayBreak } from "./DayBreak";

describe("DayBreak", () => {
  it("should split date with 'T' token", () => {
    expectTypeOf<DayBreak<"-02T">>().toMatchTypeOf<{ day: "02" }>();
  });

  it("should split date without 'T' token", () => {
    expectTypeOf<
      DayBreak<
        "-01",
        {
          year: "2022";
          month: "03";
        }
      >
    >().toMatchTypeOf<{
      day: "01";
      year: "2022";
      month: "03";
    }>();
  });

  it("should handle invalid tokens", () => {
    expectTypeOf<
      DayBreak<"X">
    >().toMatchTypeOf<"The token provided is not a valid day.">();
  });
});
