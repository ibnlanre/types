import { describe, expectTypeOf, test } from "vitest";
import { NumComponents } from "./NumComponents";

describe("NumComponents", () => {
  test("NumComponents should handle positive integers", () => {
    type Result = NumComponents<"+", "123", "456">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "123", "456"]>();
  });

  test("NumComponents should handle negative integers", () => {
    type Result = NumComponents<"-", "789", "012">;
    expectTypeOf<Result>().toEqualTypeOf<["-", "789", "012"]>();
  });

  test("NumComponents should handle empty fraction", () => {
    type Result = NumComponents<"+", "987", "">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "987", ""]>();
  });

  test("NumComponents should handle empty integers", () => {
    type Result = NumComponents<"-", "", "321">;
    expectTypeOf<Result>().toEqualTypeOf<["-", "", "321"]>();
  });

  test("NumComponents should handle empty integers and fraction", () => {
    type Result = NumComponents<"+", "", "">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "", ""]>();
  });
});
