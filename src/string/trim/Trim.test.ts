import { describe, expectTypeOf, test } from "vitest";
import { Trim } from "./Trim";

describe("Trim", () => {
  test("Trim should trim leading and trailing characters from a string", () => {
    type Result = Trim<"   hello world   ", " ">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("Trim should trim specified number of leading and trailing characters from a string", () => {
    type Result = Trim<"000hello world000", "0", 2>;
    expectTypeOf<Result>().toEqualTypeOf<"0hello world0">();
  });

  test("Trim should trim specified leading and trailing characters from a string", () => {
    type Result = Trim<"000hello world000", "0">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });

  test("Trim should handle empty string inputs", () => {
    type Result = Trim<"">;
    expectTypeOf<Result>().toEqualTypeOf<"">();
  });

  test("Trim should handle no leading or trailing characters to trim", () => {
    type Result = Trim<"hello world">;
    expectTypeOf<Result>().toEqualTypeOf<"hello world">();
  });
});
