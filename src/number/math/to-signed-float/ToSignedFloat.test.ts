import { describe, expectTypeOf, test } from "vitest";
import type { ToSignedFloat } from "./ToSignedFloat";

describe("ToSignedFloat", () => {
  test("ToSignedFloat should correctly convert a positive integer to signed float", () => {
    type Result = ToSignedFloat<42>;
    expectTypeOf<Result>().toEqualTypeOf<["+", [[4, 2], []]]>();
  });

  test("ToSignedFloat should correctly convert a positive float to signed float", () => {
    type Result = ToSignedFloat<3.14>;
    expectTypeOf<Result>().toEqualTypeOf<["+", [[3], [1, 4]]]>();
  });

  test("ToSignedFloat should return never for negative numbers", () => {
    type Result = ToSignedFloat<-10>;
    expectTypeOf<Result>().toEqualTypeOf<["-", [[1, 0], []]]>();
  });
});
