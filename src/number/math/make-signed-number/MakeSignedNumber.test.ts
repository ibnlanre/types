import { describe, expectTypeOf, test } from "vitest";
import type { MakeSignedNumber } from "./MakeSignedNumber";

describe("MakeSignedNumber", () => {
  test("MakeSignedNumber should infer the number 0 for input '0' with a negative sign", () => {
    type Result = MakeSignedNumber<"0", "-">;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("MakeSignedNumber should infer the number 123 for input '123' with a positive sign", () => {
    type Result = MakeSignedNumber<"123", "+">;
    expectTypeOf<Result>().toEqualTypeOf<123>();
  });

  test("MakeSignedNumber should infer the number -456 for input '456' with a negative sign", () => {
    type Result = MakeSignedNumber<"456", "-">;
    expectTypeOf<Result>().toEqualTypeOf<-456>();
  });

  test("MakeSignedNumber should infer the number -789 for input '789' with a negative sign", () => {
    type Result = MakeSignedNumber<"789", "-">;
    expectTypeOf<Result>().toEqualTypeOf<-789>();
  });
});
