import { describe, expectTypeOf, it } from "vitest";
import { IsMinutes } from "./IsMinutes";

describe("IsMinutes", () => {
  it("should correctly validate a valid minute", () => {
    type Output = IsMinutes<":12:">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a minute without a trailing 'Z'", () => {
    type Output = IsMinutes<":12Z">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a minute without a trailing colon", () => {
    type Output = IsMinutes<":12">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate a minute with a trailing colon", () => {
    type Output = IsMinutes<"12:">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid minute", () => {
    type Output = IsMinutes<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid minute with a trailing colon", () => {
    type Output = IsMinutes<"abcd:">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate a minute with a trailing empty string", () => {
    type Output = IsMinutes<"12">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });
});
