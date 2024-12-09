import { describe, it, expectTypeOf, expect } from "vitest";
import type { Range } from "./Range";

describe("Range", () => {
  it("should generate a range from -4 to 20", () => {
    type Result = Range<-4, 20>;
    expectTypeOf<Result>().toMatchTypeOf<number[]>();

    const expected: Result = [
      -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      17, 18, 19,
    ];

    expect(expected).toEqual([
      -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      17, 18, 19,
    ]);
  });

  it("should generate a range from 1 to 10000", () => {
    type Result = Range<1, 10000>;

    expectTypeOf<Result["length"]>().toEqualTypeOf<9999>();
    expectTypeOf<Result[0]>().toEqualTypeOf<1>();
    expectTypeOf<Result[9998]>().toEqualTypeOf<9999>();
  });

  it("should generate an empty range when start equals end", () => {
    type Result = Range<5, 5>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  it("should generate a range from 0 to 5", () => {
    type Result = Range<0, 5>;
    expectTypeOf<Result>().toEqualTypeOf<[0, 1, 2, 3, 4]>();
  });
});
