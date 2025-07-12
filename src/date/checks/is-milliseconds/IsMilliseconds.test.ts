import { describe, expectTypeOf, it } from "vitest";
import type { IsMilliseconds } from "./IsMilliseconds";

describe("IsMilliseconds", () => {
  it("should correctly validate a valid milliseconds", () => {
    type Result = IsMilliseconds<".123">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a valid milliseconds with trailing 'Z'", () => {
    type Result = IsMilliseconds<".123Z">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate milliseconds with a trailing minus", () => {
    type Result = IsMilliseconds<".123-">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate milliseconds with a trailing plus", () => {
    type Result = IsMilliseconds<".123+">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate milliseconds with a trailing dot", () => {
    type Result = IsMilliseconds<"123.">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid milliseconds", () => {
    type Result = IsMilliseconds<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid milliseconds with a trailing Z", () => {
    type Result = IsMilliseconds<"123.Z">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate milliseconds with a trailing empty string", () => {
    type Result = IsMilliseconds<"123">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
