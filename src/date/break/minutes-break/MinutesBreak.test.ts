import { describe, expectTypeOf, it } from "vitest";
import { MinutesBreak } from "./MinutesBreak";

describe("MinutesBreak", () => {
  it("should set the minutes value when the token is in the correct format", () => {
    type Result = MinutesBreak<":30:">;
    expectTypeOf<Result>().toEqualTypeOf<{ minutes: "30" }>();
  });

  it("should handle unknown token format", () => {
    type Result = MinutesBreak<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<"The token provided is not a valid minute.">();
  });
});
