import { describe, expectTypeOf, test } from "vitest";
import type { TrimEnd } from "./TrimEnd";

describe("TrimEnd", () => {
  test("TrimEnd should trim trailing characters from a string", () => {
    type Result = TrimEnd<"hello world   ", " ">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("TrimEnd should trim specified number of trailing characters from a string", () => {
    type Result = TrimEnd<"hello world000">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("TrimEnd should trim specified trailing characters from a string", () => {
    type Result = TrimEnd<"hello world000">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("TrimEnd should handle empty string inputs", () => {
    type Result = TrimEnd<"">;
    expectTypeOf<Result>().toEqualTypeOf<"">();
  });

  test("TrimEnd should handle no trailing characters to trim", () => {
    type Result = TrimEnd<"hello world">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("TrimEnd should handle no trailing characters to trim", () => {
    type Result = TrimEnd<"hello world", " ">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("TrimEnd should trim specified number of trailing characters from a string", () => {
    type Result = TrimEnd<"k.a.b.c.d...", ".", 2>;
    expectTypeOf<Result>().toEqualTypeOf<"k.a.b.c.d.">();
  });
});
