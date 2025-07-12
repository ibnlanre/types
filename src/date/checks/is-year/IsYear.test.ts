import { describe, expectTypeOf, it } from "vitest";
import type { IsYear } from "./IsYear";

describe("IsYear", () => {
  it("should correctly validate a valid year", () => {
    type Result = IsYear<"2022">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a year with a '-' prefix", () => {
    type Result = IsYear<"-220999">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a year with a trailing 'Z'", () => {
    type Result = IsYear<"2022Z">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a year with a trailing hyphen", () => {
    type Result = IsYear<"2022-">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate an invalid year", () => {
    type Result = IsYear<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid year with a trailing hyphen", () => {
    type Result = IsYear<"abcd-">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
