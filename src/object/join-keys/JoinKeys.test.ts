import { describe, expectTypeOf, it } from "vitest";
import type { JoinKeys } from "./JoinKeys";

describe("JoinKeys", () => {
  it("should join root key and key with default delimiter", () => {
    type Result = JoinKeys<"root", "key">;
    expectTypeOf<Result>().toEqualTypeOf<"root.key">();
  });

  it("should join root key and key with custom delimiter", () => {
    type Result = JoinKeys<"root", "key", "-">;
    expectTypeOf<Result>().toEqualTypeOf<"root-key">();
  });

  it("should return key when root key is empty", () => {
    type Result = JoinKeys<"", "key">;
    expectTypeOf<Result>().toEqualTypeOf<"key">();
  });
});
