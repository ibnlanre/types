import { describe, expectTypeOf, it } from "vitest";
import type { IsMonth } from "./IsMonth";

describe("IsMonth", () => {
  it("should correctly validate a valid month", () => {
    type Output = IsMonth<"-01-">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a month with a trailing 'Z'", () => {
    type Output = IsMonth<"-01Z">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a month with a leading hyphen", () => {
    type Output = IsMonth<"-01">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate an invalid month", () => {
    type Output = IsMonth<"13">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate a month with a trailing hyphen", () => {
    type Output = IsMonth<"09-">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });
});
