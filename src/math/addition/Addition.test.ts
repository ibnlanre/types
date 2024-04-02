import { describe, expectTypeOf, test } from "vitest";
import { Addition } from "./Addition";

describe("Addition", () => {
  test("Addition should add numbers correctly", () => {
    type Result = Addition<[1, 2, 3]>;
    expectTypeOf<Result>().toEqualTypeOf<6>();
  });

  test("Addition should handle empty array", () => {
    type Result = Addition<[]>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("Addition should handle single number", () => {
    type Result = Addition<[5]>;
    expectTypeOf<Result>().toEqualTypeOf<5>();
  });

  test("Addition should handle negative numbers", () => {
    type Result = Addition<[-2, 4, -6]>;
    expectTypeOf<Result>().toEqualTypeOf<-4>();
  });

  test("Addition should handle zero", () => {
    type Result = Addition<[1, 0, 3]>;
    expectTypeOf<Result>().toEqualTypeOf<4>();
  });
});
