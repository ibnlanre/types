import { describe, expect, expectTypeOf, it } from "vitest";
import type { Range } from "./Range";

describe("Range", () => {
  it("should generate a range from -4 to 4", () => {
    type Result = Range<-4, 4>;
    expectTypeOf<Result>().toMatchTypeOf<number[]>();

    const expected: Result = [-4, -3, -2, -1, 0, 1, 2, 3];
    expect(expected).toEqual([-4, -3, -2, -1, 0, 1, 2, 3]);
  });

  it("should generate a range from 1 to 10000", () => {
    type Result = Range<1, 10000>;

    expectTypeOf<Result["length"]>().toEqualTypeOf<3999>();
    expectTypeOf<Result[0]>().toEqualTypeOf<1>();
    expectTypeOf<Result[3998]>().toEqualTypeOf<3999>();
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
