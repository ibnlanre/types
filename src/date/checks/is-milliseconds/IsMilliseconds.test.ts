import { describe, expectTypeOf, it } from "vitest";
import { IsMilliseconds } from "./IsMilliseconds";

describe("IsMilliseconds", () => {
  it("should correctly validate a valid milliseconds", () => {
    type Output = IsMilliseconds<".123">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a valid milliseconds with trailing 'Z'", () => {
    type Output = IsMilliseconds<".123Z">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate milliseconds with a trailing minus", () => {
    type Output = IsMilliseconds<".123-">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate milliseconds with a trailing plus", () => {
    type Output = IsMilliseconds<".123+">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate milliseconds with a trailing dot", () => {
    type Output = IsMilliseconds<"123.">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid milliseconds", () => {
    type Output = IsMilliseconds<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid milliseconds with a trailing Z", () => {
    type Output = IsMilliseconds<"123.Z">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate milliseconds with a trailing empty string", () => {
    type Output = IsMilliseconds<"123">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });
});
