import { describe, expectTypeOf, test } from "vitest";

import type { Sign, UnsignedFloat } from "..";
import type { SignedFloat } from "./SignedFloat";

describe("SignedFloat", () => {
  test("SignedFloat should create a tuple with sign and unsigned float", () => {
    type Result = SignedFloat<"+", [[0], [1, 2, 3]]>;
    expectTypeOf<Result>().toEqualTypeOf<["+", [[0], [1, 2, 3]]]>();
  });

  test("SignedFloat should handle different sign and unsigned float types", () => {
    type Result = SignedFloat<"-", [[1], [2, 3]]>;
    expectTypeOf<Result>().toEqualTypeOf<["-", [[1], [2, 3]]]>();
  });

  test("SignedFloat should handle default sign and unsigned float types", () => {
    type Result = SignedFloat;
    expectTypeOf<Result>().toEqualTypeOf<[Sign, UnsignedFloat]>();
  });
});
