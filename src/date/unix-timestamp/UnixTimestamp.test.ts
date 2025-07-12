import { describe, expectTypeOf, it } from "vitest";

import type { EpochDateFormat } from "../DateFormat";
import type { UnixTimestamp } from "./UnixTimestamp";

describe("UnixTimestamp", () => {
  it("should infer the epoch for the base date", () => {
    type Result = UnixTimestamp<EpochDateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should correctly infer the output type", () => {
    type Date = {
      year: "2023";
      month: "02";
      day: "28";
      hour: "21";
      minutes: "06";
      seconds: "09";
      milliseconds: "999";
      timezone: "+00:00";
    };
    type Result = UnixTimestamp<Date>;

    expectTypeOf<Result>().toEqualTypeOf<1677618369999>();
  });

  it("should handle leap years correctly", () => {
    type Date = {
      year: "2024";
      month: "02";
      day: "29";
      hour: "21";
      minutes: "06";
      seconds: "09";
      milliseconds: "999";
      timezone: "+00:00";
    };
    type Result = UnixTimestamp<Date>;

    expectTypeOf<Result>().toEqualTypeOf<1709240769999>();
  });
});
