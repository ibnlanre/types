import { TGt, TLt } from "@ibnlanre/types";
import { describe, expectTypeOf, it } from "vitest";
import { Every, TEvery } from "./Every";

describe("TEvery", () => {
  it("should return true if all elements in the array satisfy the condition", () => {
    expectTypeOf<Every<TGt<0>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<1>();
  });

  it("should return false if any element in the array does not satisfy the condition", () => {
    expectTypeOf<Every<TGt<3>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<0>();
  });

  it("should handle empty arrays", () => {
    expectTypeOf<Every<TGt<0>, []>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with a single element", () => {
    expectTypeOf<Every<TGt<0>, [5]>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with multiple elements that satisfy the condition", () => {
    expectTypeOf<Every<TLt<10>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with multiple elements where some do not satisfy the condition", () => {
    expectTypeOf<Every<TLt<5>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<0>();
  });
});
