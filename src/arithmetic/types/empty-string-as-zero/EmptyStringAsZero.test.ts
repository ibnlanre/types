import { describe, expectTypeOf, test } from "vitest";
import { EmptyStringAsZero } from "./EmptyStringAsZero";

describe("EmptyStringAsZero", () => {
  test("EmptyStringAsZero should convert an empty string to '0'", () => {
    type Result = EmptyStringAsZero<"">;
    expectTypeOf<Result>().toEqualTypeOf<"0">();
  });

  test("EmptyStringAsZero should leave non-empty strings unchanged", () => {
    type Result = EmptyStringAsZero<"123">;
    expectTypeOf<Result>().toEqualTypeOf<"123">();
  });

  test("EmptyStringAsZero should handle string literals", () => {
    type Result = EmptyStringAsZero<"">;
    expectTypeOf<Result>().toEqualTypeOf<"0">();
  });

  test("EmptyStringAsZero should handle string variables", () => {
    type Input = "";
    type Result = EmptyStringAsZero<Input>;
    expectTypeOf<Result>().toEqualTypeOf<"0">();
  });
});
