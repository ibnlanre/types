import { describe, expectTypeOf, it } from "vitest";
import type { YearBreak } from "./YearBreak";

describe("YearBreak", () => {
  it("should correctly handle a valid year without trailing hyphen", () => {
    type Result = YearBreak<"2022">;
    expectTypeOf<Result>().toEqualTypeOf<{ year: "2022" }>();
  });

  it("should correctly handle a valid year with trailing 'Z'", () => {
    type Result = YearBreak<"2022Z">;
    expectTypeOf<Result>().toEqualTypeOf<{ year: "2022" }>();
  });

  it("should correctly handle a valid year with trailing hyphen", () => {
    type Result = YearBreak<"2022-">;
    expectTypeOf<Result>().toEqualTypeOf<{ year: "2022" }>();
  });

  it("should return an error message for an invalid year", () => {
    type Result = YearBreak<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<"'abcd' is not a valid year token.">();
  });

  it("should return an error message for an invalid year with trailing hyphen", () => {
    type Result = YearBreak<"abcd-">;
    expectTypeOf<Result>().toEqualTypeOf<"'abcd-' is not a valid year token.">();
  });

  // JavaScript year-specific tests
  it("should handle years at JavaScript Date boundary with + prefix", () => {
    type MinYear = YearBreak<"-271820">;
    expectTypeOf<MinYear>().toEqualTypeOf<{ year: "+271820" }>();

    type MaxYear = YearBreak<"275759">;
    expectTypeOf<MaxYear>().toEqualTypeOf<{ year: "+275759" }>();
  });

  it("should mark years below JavaScript minimum limit as invalid", () => {
    type Result = YearBreak<"-271821">;
    expectTypeOf<Result>().toEqualTypeOf<{
      year: "+271821";
    }>();
  });

  it("should mark years above JavaScript maximum limit as invalid", () => {
    type Result = YearBreak<"275760">;
    expectTypeOf<Result>().toEqualTypeOf<"'275760' should be between -271820 and 275759, inclusive.">();
  });

  it("should prefix and pad 5-digit years", () => {
    type Result = YearBreak<"12345">;
    expectTypeOf<Result>().toEqualTypeOf<{ year: "+012345" }>();
  });

  it("should prefix 6-digit years", () => {
    type Result = YearBreak<"123456">;
    expectTypeOf<Result>().toEqualTypeOf<{ year: "+123456" }>();
  });

  it("should handle small year numbers without padding", () => {
    type Result = YearBreak<"123">;
    expectTypeOf<Result>().toEqualTypeOf<{ year: "123" }>();
  });
});
