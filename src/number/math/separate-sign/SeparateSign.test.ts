import { describe, expectTypeOf, test } from "vitest";
import type { SeparateSign } from "./SeparateSign";

describe("SeparateSign", () => {
  test("SeparateSign should separate negative sign and number", () => {
    type Result = SeparateSign<"-123">;
    expectTypeOf<Result>().toEqualTypeOf<["-", "123"]>();
  });

  test("SeparateSign should keep positive sign and input as is", () => {
    type Result = SeparateSign<"+456">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "456"]>();
  });

  test("SeparateSign should keep input as is if there is no sign", () => {
    type Result = SeparateSign<"789">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "789"]>();
  });
});
