import { describe, expectTypeOf, it } from "vitest";
import type { IndexAt } from "./IndexAt";

describe("IndexAt", () => {
  type TestArray = [0, 1, 2];

  it("should correctly get the value at the specified index", () => {
    expectTypeOf<IndexAt<TestArray, 0>>().toEqualTypeOf<0>();
    expectTypeOf<IndexAt<TestArray, 1>>().toEqualTypeOf<1>();
    expectTypeOf<IndexAt<TestArray, 2>>().toEqualTypeOf<2>();
  });

  it("should correctly get the value at the specified negative index", () => {
    expectTypeOf<IndexAt<TestArray, -1>>().toEqualTypeOf<2>();
    expectTypeOf<IndexAt<TestArray, -2>>().toEqualTypeOf<1>();
    expectTypeOf<IndexAt<TestArray, -3>>().toEqualTypeOf<0>();
  });

  it("should throw an error for an out-of-bounds index", () => {
    expectTypeOf<IndexAt<TestArray, 3>>().toBeNever();
    expectTypeOf<IndexAt<TestArray, -4>>().toBeNever();
  });
});
