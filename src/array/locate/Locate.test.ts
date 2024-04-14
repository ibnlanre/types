import { describe, expectTypeOf, it } from "vitest";
import type { Locate } from "./Locate";

describe("Locate", () => {
  type TestArray = [0, 1, 2];

  it("should correctly get the value at the specified index", () => {
    expectTypeOf<Locate<TestArray, 0>>().toEqualTypeOf<0>();
    expectTypeOf<Locate<TestArray, 1>>().toEqualTypeOf<1>();
    expectTypeOf<Locate<TestArray, 2>>().toEqualTypeOf<2>();
  });

  it("should correctly get the value at the specified negative index", () => {
    expectTypeOf<Locate<TestArray, -1>>().toEqualTypeOf<2>();
    expectTypeOf<Locate<TestArray, -2>>().toEqualTypeOf<1>();
    expectTypeOf<Locate<TestArray, -3>>().toEqualTypeOf<0>();
  });

  it("should throw an error for an out-of-bounds index", () => {
    expectTypeOf<Locate<TestArray, 3>>().toBeNever();
    expectTypeOf<Locate<TestArray, -4>>().toBeNever();
  });
});
