import { describe, expectTypeOf, test } from "vitest";
import { Replace } from "./Replace";

describe("Replace", () => {
  test("Replace should replace all occurrences of a substring in a string", () => {
    type Result = Replace<"hello world", "o", "a">;
    expectTypeOf<Result>().toEqualTypeOf<"hella warld">();
  });

  test("Replace should handle empty string inputs", () => {
    type Result = Replace<"abc", "", "x">;
    expectTypeOf<Result>().toEqualTypeOf<"axbxcx">();
  });

  test("Replace should handle no occurrences of the substring", () => {
    type Result = Replace<"hello world", "x", "y">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("Replace should handle multiple occurrences of the substring", () => {
    type Result = Replace<"hello world", "o", "oo">;
    expectTypeOf<Result>().toEqualTypeOf<"helloo woorld">();
  });

  test("Replace should handle union of replacements", () => {
    type Result = Replace<"hello world", "o" | "l", "i">;
    expectTypeOf<Result>().toEqualTypeOf<"heiii wirid">();
  });
});
