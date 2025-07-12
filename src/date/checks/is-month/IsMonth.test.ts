import { describe, expectTypeOf, it } from "vitest";
import type { IsMonth } from "./IsMonth";

describe("IsMonth", () => {
  it("should correctly validate a valid month", () => {
    type Result = IsMonth<"-01-">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a month with a trailing 'Z'", () => {
    type Result = IsMonth<"-01Z">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a month with a leading hyphen", () => {
    type Result = IsMonth<"-01">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate an invalid month", () => {
    type Result = IsMonth<"13">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate a month with a trailing hyphen", () => {
    type Result = IsMonth<"09-">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });
});
