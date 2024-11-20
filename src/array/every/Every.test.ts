import type { Apply, TGreaterThan, TLessThan } from "@ibnlanre/types";
import { describe, expectTypeOf, it } from "vitest";
import type { Every, TEvery } from "./Every";

describe("Every", () => {
  it("should return true if all elements in the array satisfy the condition", () => {
    expectTypeOf<Every<TGreaterThan<0>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<1>();
  });

  it("should return false if any element in the array does not satisfy the condition", () => {
    expectTypeOf<Every<TGreaterThan<3>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<0>();
  });

  it("should handle empty arrays", () => {
    expectTypeOf<Every<TGreaterThan<0>, []>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with a single element", () => {
    expectTypeOf<Every<TGreaterThan<0>, [5]>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with multiple elements that satisfy the condition", () => {
    expectTypeOf<Every<TLessThan<10>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with multiple elements where some do not satisfy the condition", () => {
    expectTypeOf<Every<TLessThan<5>, [1, 2, 3, 4, 5]>>().toEqualTypeOf<0>();
  });
});

describe("TEvery", () => {
  it("should fail when no argument is provided", () => {
    expectTypeOf<Apply<TEvery<TGreaterThan<0>>, never>>().toBeNever();
  });

  it("should return true if all elements in the array satisfy the condition", () => {
    expectTypeOf<
      Apply<TEvery<TGreaterThan<0>>, [[1, 2, 3, 4, 5]]>
    >().toEqualTypeOf<1>();
  });

  it("should return false if any element in the array does not satisfy the condition", () => {
    expectTypeOf<
      Apply<TEvery<TGreaterThan<3>>, [[1, 2, 3, 4, 5]]>
    >().toEqualTypeOf<0>();
  });

  it("should handle empty arrays", () => {
    expectTypeOf<Apply<TEvery<TGreaterThan<0>>, [[]]>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with a single element", () => {
    expectTypeOf<Apply<TEvery<TGreaterThan<0>>, [[5]]>>().toEqualTypeOf<1>();
  });

  it("should handle arrays with multiple elements that satisfy the condition", () => {
    expectTypeOf<
      Apply<TEvery<TLessThan<10>>, [[1, 2, 3, 4, 5]]>
    >().toEqualTypeOf<1>();
  });

  it("should handle arrays with multiple elements where some do not satisfy the condition", () => {
    expectTypeOf<
      Apply<TEvery<TLessThan<5>>, [[1, 2, 3, 4, 5]]>
    >().toEqualTypeOf<0>();
  });
});
