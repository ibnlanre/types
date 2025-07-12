import { describe, expectTypeOf, it } from "vitest";
import type { AddDate } from "./ManipulateDate";

describe("AddDate", () => {
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

  it("should add days correctly", () => {
    type Result = AddDate<BaseDate, { day: 2 }>;
    type Expected = {
      year: "2023";
      month: "01";
      day: "03";
      hour: "12";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should add multiple units correctly", () => {
    type Result = AddDate<
      BaseDate,
      {
        day: 2;
        hour: 3;
        minutes: 30;
      }
    >;
    type Expected = {
      year: "2023";
      month: "01";
      day: "03";
      hour: "15";
      minutes: "30";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle month transitions", () => {
    type Result = AddDate<BaseDate, { day: 31 }>;
    type Expected = {
      year: "2023";
      month: "02";
      day: "01";
      hour: "12";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});
