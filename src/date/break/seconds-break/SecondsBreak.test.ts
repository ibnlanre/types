import { describe, expectTypeOf, it } from "vitest";
import { SecondsBreak } from "./SecondsBreak";

describe("SecondsBreak", () => {
  it("should set the seconds value when the token is in the correct format", () => {
    type Result = SecondsBreak<":30.">;
    expectTypeOf<Result>().toEqualTypeOf<{ seconds: "30" }>();
  });

  it("should handle unknown token format", () => {
    type Result = SecondsBreak<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<"The token provided is not a valid minute.">();
  });
});
