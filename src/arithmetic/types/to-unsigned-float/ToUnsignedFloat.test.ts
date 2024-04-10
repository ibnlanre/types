import { describe, expectTypeOf, test } from "vitest";
import { ToUnsignedFloat } from "./ToUnsignedFloat";

describe("ToUnsignedFloat", () => {
  test("ToUnsignedFloat should correctly decompose a positive integer", () => {
    type Result = ToUnsignedFloat<42>;
    expectTypeOf<Result>().toEqualTypeOf<[[4, 2], []]>();
  });

  test("ToUnsignedFloat should correctly decompose a positive float", () => {
    type Result = ToUnsignedFloat<3.14>;
    expectTypeOf<Result>().toEqualTypeOf<[[3], [1, 4]]>();
  });

  test("ToUnsignedFloat should return never for negative numbers", () => {
    type Result = ToUnsignedFloat<-10>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 0], []]>();
  });
});
