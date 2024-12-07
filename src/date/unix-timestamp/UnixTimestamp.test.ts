import { describe, expectTypeOf, it } from "vitest";
import type { UnixTimestamp } from "./UnixTimestamp";

type Date = {
  year: "2020";
  month: "02";
  day: "29";
  hour: "21";
  minutes: "06";
  seconds: "09";
  milliseconds: "999";
  timezone: "+00:00";
};

describe("UnixTimestamp", () => {
  it("should correctly infer the output type", () => {
    type Result = UnixTimestamp<Date>;
    expectTypeOf<Result>().toEqualTypeOf<1583010369999>();
  });
});
