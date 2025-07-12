import { describe, expectTypeOf, it } from "vitest";

import type { UnixTimestamp } from "../unix-timestamp";
import type { TimestampToDate } from "./TimestampToDate";

describe("TimestampToDate", () => {
  it("should convert epoch to DateFormat", () => {
    type Expected = {
      year: "1970";
      month: "01";
      day: "01";
      hour: "00";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    type Result = TimestampToDate<0>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should convert a future timestamp to DateFormat", () => {
    // June 1, 2025 12:30:45.123
    type Expected = {
      year: "2025";
      month: "06";
      day: "01";
      hour: "12";
      minutes: "30";
      seconds: "45";
      milliseconds: "123";
      timezone: "+00:00";
    };

    type Input = UnixTimestamp<Expected>;
    type Result = TimestampToDate<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should convert a past timestamp to DateFormat", () => {
    type Expected = {
      year: "2022";
      month: "12";
      day: "30";
      hour: "12";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };

    type Input = UnixTimestamp<Expected>; // 1672401600000
    type Result = TimestampToDate<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle leap years correctly", () => {
    // February 29, 2024 (leap year)
    type Expected = {
      year: "2024";
      month: "02";
      day: "29";
      hour: "00";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };

    type DayInYear = 60; // February 29 is the 60th day in a leap year

    type Input = UnixTimestamp<Expected>;
    type Result = TimestampToDate<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});
