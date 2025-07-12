import { describe, expectTypeOf, it } from "vitest";
import type { IsHour } from "./IsHour";

describe("IsHour", () => {
  it("should correctly validate a valid hour", () => {
    type Result = IsHour<"T12:">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly validate an hour with a trailing T", () => {
    type Result = IsHour<"12T">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an hour with a trailing colon", () => {
    type Result = IsHour<"12:">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid hour", () => {
    type Result = IsHour<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid hour with a trailing T", () => {
    type Result = IsHour<"abcdT">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid hour with a trailing colon", () => {
    type Result = IsHour<"abcd:">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly validate an hour with a trailing empty string", () => {
    type Result = IsHour<"12">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
