import { describe, expectTypeOf, it } from "vitest";
import { YearBreak } from "./YearBreak";

describe("YearBreak", () => {
  it("should correctly handle a valid year without trailing hyphen", () => {
    type Output = YearBreak<"2022">;
    expectTypeOf<Output>().toEqualTypeOf<{ year: "2022" }>();
  });

  it("should correctly handle a valid year with trailing 'Z'", () => {
    type Output = YearBreak<"2022Z">;
    expectTypeOf<Output>().toEqualTypeOf<{ year: "2022" }>();
  });

  it("should correctly handle a valid year with trailing hyphen", () => {
    type Output = YearBreak<"2022-">;
    expectTypeOf<Output>().toEqualTypeOf<{ year: "2022" }>();
  });

  it("should return an error message for an invalid year", () => {
    type Output = YearBreak<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<"The token provided is not a valid year.">();
  });

  it("should return an error message for an invalid year with trailing hyphen", () => {
    type Output = YearBreak<"abcd-">;
    expectTypeOf<Output>().toEqualTypeOf<"The token provided is not a valid year.">();
  });
});
