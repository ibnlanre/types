import { describe, expectTypeOf, test } from "vitest";
import { InferNumber } from "./InferNumber";

describe("InferNumber", () => {
  test("InferNumber should infer the number 0 for input '0' with a negative sign", () => {
    type Result = InferNumber<"0", "-">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("InferNumber should infer the number 123 for input '123' with a positive sign", () => {
    type Result = InferNumber<"123", "+">;
    expectTypeOf<Result>().toEqualTypeOf<123>();
  });

  test("InferNumber should infer the number -456 for input '456' with a negative sign", () => {
    type Result = InferNumber<"456", "-">;
    expectTypeOf<Result>().toEqualTypeOf<-456>();
  });

  test("InferNumber should infer the number -789 for input '789' with a negative sign", () => {
    type Result = InferNumber<"789", "-">;
    expectTypeOf<Result>().toEqualTypeOf<-789>();
  });
});
