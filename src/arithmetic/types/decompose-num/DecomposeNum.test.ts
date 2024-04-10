import { describe, expectTypeOf, test } from "vitest";
import { DecomposeNum } from "./DecomposeNum";

describe("DecomposeNum", () => {
  test("Should decompose positive integer", () => {
    type Result = DecomposeNum<123>;
    expectTypeOf<Result>().toEqualTypeOf<["+", "123", ""]>();
  });

  test("Should decompose negative integer", () => {
    type Result = DecomposeNum<-456>;
    expectTypeOf<Result>().toEqualTypeOf<["-", "456", ""]>();
  });

  test("Should decompose positive decimal", () => {
    type Result = DecomposeNum<7.89>;
    expectTypeOf<Result>().toEqualTypeOf<["+", "7", "89"]>();
  });

  test("Should decompose negative decimal", () => {
    type Result = DecomposeNum<-0.123>;
    expectTypeOf<Result>().toEqualTypeOf<["-", "0", "123"]>();
  });

  test("Should decompose scientific notation", () => {
    type Result = DecomposeNum<"1.23e2">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "1", "23e2"]>();
  });
});
