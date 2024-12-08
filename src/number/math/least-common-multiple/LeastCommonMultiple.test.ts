import { describe, it, expectTypeOf } from "vitest";
import type { LeastCommonMultiple } from "./LeastCommonMultiple";

describe("LeastCommonMultiple", () => {
  it("should calculate the least common multiple of two numbers", () => {
    type Result1 = LeastCommonMultiple<4, 6>;
    expectTypeOf<Result1>().toEqualTypeOf<12>();

    type Result2 = LeastCommonMultiple<10, 15>;
    expectTypeOf<Result2>().toEqualTypeOf<30>();

    type Result3 = LeastCommonMultiple<7, 5>;
    expectTypeOf<Result3>().toEqualTypeOf<35>();

    type Result4 = LeastCommonMultiple<21, 6>;
    expectTypeOf<Result4>().toEqualTypeOf<42>();

    type Result5 = LeastCommonMultiple<8, 9>;
    expectTypeOf<Result5>().toEqualTypeOf<72>();
  });
});
