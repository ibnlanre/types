import { describe, expectTypeOf, it } from "vitest";
import type { SecondsBreak } from "./SecondsBreak";

describe("SecondsBreak", () => {
  it("should set the seconds value when the token is in the correct format", () => {
    type Result = SecondsBreak<":30.">;
    expectTypeOf<Result>().toEqualTypeOf<{ seconds: "30" }>();
  });

  it("should set the seconds value when the token is in the correct format with additional properties", () => {
    type Result = SecondsBreak<":30.", { milliseconds: "500" }>;
    expectTypeOf<Result>().toEqualTypeOf<{ seconds: "30"; milliseconds: "500" }>();
  });

  it("should handle tokens without ':' prefix", () => {
    type Result = SecondsBreak<"30.">;
    expectTypeOf<Result>().toEqualTypeOf<"'30.' is not a valid seconds token.">();
  });

  it("should handle unknown token format", () => {
    type Result = SecondsBreak<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<"'abc' is not a valid seconds token.">();
  });
});
