import { describe, expectTypeOf, it } from "vitest";
import type { IsSeconds } from "./IsSeconds";

describe("IsSeconds", () => {
  it("should correctly validate a valid seconds", () => {
    type Output = IsSeconds<":12.">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate seconds without a trailing 'Z'", () => {
    type Output = IsSeconds<":12Z">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate seconds without a trailing dot", () => {
    type Output = IsSeconds<":12">;
    expectTypeOf<Output>().toEqualTypeOf<1>();
  });

  it("should correctly validate seconds with a trailing dot", () => {
    type Output = IsSeconds<"12.">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid seconds", () => {
    type Output = IsSeconds<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate an invalid seconds with a trailing colon", () => {
    type Output = IsSeconds<"abcd:">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });

  it("should correctly validate seconds with a trailing empty string", () => {
    type Output = IsSeconds<"12">;
    expectTypeOf<Output>().toEqualTypeOf<0>();
  });
});
