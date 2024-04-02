import { describe, expectTypeOf, it } from "vitest";
import { MillisecondsBreak } from "./MillisecondsBreak";

describe("MillisecondsBreak", () => {
  it("should set the millisecond value when the token ends with 'Z'", () => {
    type Result = MillisecondsBreak<".123Z">;
    expectTypeOf<Result>().toEqualTypeOf<{ milliseconds: "123" }>();
  });

  it("should handle negative timezone offset", () => {
    type Result = MillisecondsBreak<".456-">;
    expectTypeOf<Result>().toEqualTypeOf<{
      milliseconds: "456";
    }>();
  });

  it("should handle positive timezone offset", () => {
    type Result = MillisecondsBreak<".789+">;
    expectTypeOf<Result>().toEqualTypeOf<{
      milliseconds: "789";
    }>();
  });

  it("should handle unknown token format", () => {
    type Result = MillisecondsBreak<"abc">;
    expectTypeOf<Result>().toEqualTypeOf<"The token provided is not a valid millisecond.">();
  });
});
