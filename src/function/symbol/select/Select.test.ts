import { describe, expectTypeOf, it } from "vitest";
import type { Select } from "./Select";

describe("Select", () => {
  it("should concatenate two empty arrays", () => {
    type Result = Select<[], []>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  it("should concatenate an empty array with a non-empty array", () => {
    type Result = Select<[], [1, 2, 3]>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  it("should concatenate a non-empty array with an empty array", () => {
    type Result = Select<[1, 2, 3], []>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  it("should concatenate two non-empty arrays", () => {
    type Result = Select<[1, 2], [3, 4]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2]>();
  });

  it("should handle arrays with void elements", () => {
    type Result = Select<[1, void, 3], [void, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 5, 3]>();
  });

  it("should handle arrays with different lengths", () => {
    type Result = Select<[1, 2, 3], [4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  it("should handle arrays with different lengths and void elements", () => {
    type Result = Select<[1, void, 3], [4, 5, void]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 5, 3]>();
  });

  it("should handle multiple void elements on the right", () => {
    type Result = Select<[6, void, 4], [3, void, void]>;
    expectTypeOf<Result>().toEqualTypeOf<[6, 3, 4]>();
  });

  it("should handle a fully void array", () => {
    type Result = Select<[4, void, 2], [void]>;
    expectTypeOf<Result>().toEqualTypeOf<[4, 2]>();
  });

  it("should handle nested arrays", () => {
    type Result = Select<[[1, 2], [3, 4]], [[5, 6], [7, 8]]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2], [3, 4]]>();
  });

  it("should handle single value nested arrays", () => {
    type Result = Select<[void], [[3, 4]]>;
    expectTypeOf<Result>().toEqualTypeOf<[[3, 4]]>();
  });

  it("should handle multi-value nested arrays", () => {
    expectTypeOf<Select<[void, void], [[1, 2]]>>().toEqualTypeOf<[1, 2]>();

    type Result2 = Select<[1, void], [[3, 4]]>;
    expectTypeOf<Result2>().toEqualTypeOf<[1, [3, 4]]>();

    type Result3 = Select<[never, void], [[3, 4]]>;
    expectTypeOf<Result3>().toEqualTypeOf<[never, [3, 4]]>();
  });

  it("should handle empty nested array on the left", () => {
    type Result = Select<[], [[3, 4]]>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  it("should handle empty nested array on the right", () => {
    type Result = Select<[1, void, 2], []>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2]>();
  });
});
