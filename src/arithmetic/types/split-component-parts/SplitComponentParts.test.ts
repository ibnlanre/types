import { describe, expectTypeOf, test } from "vitest";
import { SplitComponentParts } from "./SplitComponentParts";

describe("SplitComponentParts", () => {
  test("SplitComponentParts should split integer component and empty fraction component", () => {
    type Result = SplitComponentParts<123>;
    expectTypeOf<Result>().toEqualTypeOf<[never, "123", ""]>();
  });

  test("SplitComponentParts should split integer component and non-empty fraction component", () => {
    type Result = SplitComponentParts<123.45>;
    expectTypeOf<Result>().toEqualTypeOf<[never, "123", "45"]>();
  });

  test("SplitComponentParts should split string component and empty fraction component", () => {
    type Result = SplitComponentParts<"456">;
    expectTypeOf<Result>().toEqualTypeOf<[never, "456", ""]>();
  });

  test("SplitComponentParts should split string component and non-empty fraction component", () => {
    type Result = SplitComponentParts<"+456.78">;
    expectTypeOf<Result>().toEqualTypeOf<[never, "+456", "78"]>();
  });
});
