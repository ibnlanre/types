import { describe, expectTypeOf, it } from "vitest";
import type { IsSeconds } from "./IsSeconds";

describe("IsSeconds", () => {
  it("should correctly validate a valid seconds", () => {
    type Result = IsSeconds<":12.">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate seconds without a trailing 'Z'", () => {
    type Result = IsSeconds<":12Z">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate seconds without a trailing dot", () => {
    type Result = IsSeconds<":12">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate seconds with a trailing dot", () => {
    type Result = IsSeconds<"12.">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid seconds", () => {
    type Result = IsSeconds<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid seconds with a trailing colon", () => {
    type Result = IsSeconds<"abcd:">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate seconds with a trailing empty string", () => {
    type Result = IsSeconds<"12">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
