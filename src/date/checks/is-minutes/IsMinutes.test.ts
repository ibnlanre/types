import { describe, expectTypeOf, it } from "vitest";
import type { IsMinutes } from "./IsMinutes";

describe("IsMinutes", () => {
  it("should correctly validate a valid minute", () => {
    type Result = IsMinutes<":12:">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a minute without a trailing 'Z'", () => {
    type Result = IsMinutes<":12Z">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a minute without a trailing colon", () => {
    type Result = IsMinutes<":12">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate a minute with a trailing colon", () => {
    type Result = IsMinutes<"12:">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid minute", () => {
    type Result = IsMinutes<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid minute with a trailing colon", () => {
    type Result = IsMinutes<"abcd:">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate a minute with a trailing empty string", () => {
    type Result = IsMinutes<"12">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
