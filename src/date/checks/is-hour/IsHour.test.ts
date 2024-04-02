import { describe, expectTypeOf, it } from "vitest";
import { IsHour } from "./IsHour";

describe("IsHour", () => {
  it("should correctly validate a valid hour", () => {
    type Output = IsHour<"T12:">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate an hour with a trailing T", () => {
    type Output = IsHour<"12T">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an hour with a trailing colon", () => {
    type Output = IsHour<"12:">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid hour", () => {
    type Output = IsHour<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid hour with a trailing T", () => {
    type Output = IsHour<"abcdT">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid hour with a trailing colon", () => {
    type Output = IsHour<"abcd:">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an hour with a trailing empty string", () => {
    type Output = IsHour<"12">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });
});
