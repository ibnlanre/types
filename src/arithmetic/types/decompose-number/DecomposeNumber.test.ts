import { describe, expectTypeOf, test } from "vitest";
import { DecomposeNumber } from "./DecomposeNumber";

describe("DecomposeNumber", () => {
  test("Should decompose positive integer", () => {
    type Result = DecomposeNumber<123>;
    expectTypeOf<Result>().toEqualTypeOf<["+", "123", ""]>();
  });

  test("Should decompose negative integer", () => {
    type Result = DecomposeNumber<-456>;
    expectTypeOf<Result>().toEqualTypeOf<["-", "456", ""]>();
  });

  test("Should decompose positive decimal", () => {
    type Result = DecomposeNumber<7.89>;
    expectTypeOf<Result>().toEqualTypeOf<["+", "7", "89"]>();
  });

  test("Should decompose negative decimal", () => {
    type Result = DecomposeNumber<-0.123>;
    expectTypeOf<Result>().toEqualTypeOf<["-", "0", "123"]>();
  });

  test("Should decompose scientific notation", () => {
    type Result = DecomposeNumber<"1.23e2">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "1", "23e2"]>();
  });
});
