import { describe, expectTypeOf, test } from "vitest";
import { NumberComponents } from "./NumberComponents";

describe("NumberComponents", () => {
  test("NumberComponents should handle positive integers", () => {
    type Result = NumberComponents<"+", "123", "456">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "123", "456"]>();
  });

  test("NumberComponents should handle negative integers", () => {
    type Result = NumberComponents<"-", "789", "012">;
    expectTypeOf<Result>().toEqualTypeOf<["-", "789", "012"]>();
  });

  test("NumberComponents should handle empty fraction", () => {
    type Result = NumberComponents<"+", "987", "">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "987", ""]>();
  });

  test("NumberComponents should handle empty integers", () => {
    type Result = NumberComponents<"-", "", "321">;
    expectTypeOf<Result>().toEqualTypeOf<["-", "", "321"]>();
  });

  test("NumberComponents should handle empty integers and fraction", () => {
    type Result = NumberComponents<"+", "", "">;
    expectTypeOf<Result>().toEqualTypeOf<["+", "", ""]>();
  });
});
