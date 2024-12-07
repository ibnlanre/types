import { describe, expectTypeOf, it } from "vitest";
import type { IsDay } from "./IsDay";

describe("IsDay", () => {
  it("should correctly validate a valid day", () => {
    type Output = IsDay<"-15">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a day with a trailing 'T'", () => {
    type Output = IsDay<"-15T">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a day with a trailing empty 'Z'", () => {
    type Output = IsDay<"-15Z">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a day with a trailing hyphen", () => {
    type Output = IsDay<"15-">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid day", () => {
    type Output = IsDay<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid day with a trailing hyphen", () => {
    type Output = IsDay<"abcd-">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate a day with a trailing '['", () => {
    type Output = IsDay<"15[">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });
});
