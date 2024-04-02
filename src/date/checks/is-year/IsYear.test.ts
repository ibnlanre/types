import { describe, expectTypeOf, it } from "vitest";
import { IsYear } from "./IsYear";

describe("IsYear", () => {
  it("should correctly validate a valid year", () => {
    type Output = IsYear<"2022">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a year with a '-' prefix", () => {
    type Output = IsYear<"-220999">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a year with a trailing 'Z'", () => {
    type Output = IsYear<"2022Z">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a year with a trailing hyphen", () => {
    type Output = IsYear<"2022-">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate an invalid year", () => {
    type Output = IsYear<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid year with a trailing hyphen", () => {
    type Output = IsYear<"abcd-">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });
});
