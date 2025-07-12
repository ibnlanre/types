import { describe, expectTypeOf, it } from "vitest";
import type { SubtractDate } from "./ManipulateDate";
import type { TimestampToDate } from "../timestamp-to-date";
import type { UnixTimestamp } from "../unix-timestamp";

describe("SubtractDate", () => {
  type BaseDate = {
    year: "2023";
    month: "01";
    day: "01";
    hour: "12";
    minutes: "00";
    seconds: "00";
    milliseconds: "000";
    timezone: "+00:00";
  };

  it("should subtract days correctly", () => {
    type Result = SubtractDate<BaseDate, { day: 2 }>;
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
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should subtract multiple units correctly", () => {
    type Result = SubtractDate<
      BaseDate,
      {
        day: 1;
        hour: 3;
        minutes: 30;
      }
    >;
    type Expected = {
      year: "2022";
      month: "12";
      day: "31";
      hour: "08";
      minutes: "30";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle month transitions", () => {
    type Result = SubtractDate<BaseDate, { month: 1 }>;
    type Expected = {
      year: "2022";
      month: "12";
      day: "01";
      hour: "12";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    type Expect = UnixTimestamp<Expected>;
    type Time = TimestampToDate<Expect>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});
