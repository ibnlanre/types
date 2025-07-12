import { describe, expectTypeOf, it } from "vitest";
import type { IsDay } from "./IsDay";

describe("IsDay", () => {
  it("should correctly validate a valid day", () => {
    type Result = IsDay<"-15">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a day with a trailing 'T'", () => {
    type Result = IsDay<"-15T">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a day with a trailing empty 'Z'", () => {
    type Result = IsDay<"-15Z">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a day with a trailing hyphen", () => {
    type Result = IsDay<"15-">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid day", () => {
    type Result = IsDay<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid day with a trailing hyphen", () => {
    type Result = IsDay<"abcd-">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate a day with a trailing '['", () => {
    type Result = IsDay<"15[">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
