import { describe, expectTypeOf, it } from "vitest";
import type { ManipulateDate } from "./ManipulateDate";

describe("ManipulateDate", () => {
  type Input = {
    year: "2023";
    month: "01";
    day: "01";
    hour: "12";
    minutes: "00";
    seconds: "00";
    milliseconds: "000";
    timezone: "+00:00";
  };

  it("should add multiple units correctly", () => {
    type Result = ManipulateDate<Input, "add", { day: 2; hour: 3 }>;
    type Expected = {
      year: "2023";
      month: "01";
      day: "03";
      hour: "15";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should subtract multiple units correctly", () => {
    type Result = ManipulateDate<Input, "subtract", { hour: 5; minutes: 30 }>;
    type Expected = {
      year: "2023";
      month: "01";
      day: "01";
      hour: "06";
      minutes: "30";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle month and year transitions", () => {
    type Result = ManipulateDate<Input, "add", { month: 1; day: 15 }>;
    type Expected = {
      year: "2023";
      month: "02";
      day: "15";
      hour: "12";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle complex duration changes", () => {
    type Result = ManipulateDate<
      Input,
      "add",
      {
        year: 1;
        month: 2;
        day: 3;
        hour: 4;
        minutes: 5;
        seconds: 6;
        milliseconds: 7;
      }
    >;
    type Expected = {
      year: "2024";
      month: "03";
      day: "04";
      hour: "16";
      minutes: "05";
      seconds: "06";
      milliseconds: "007";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle leap years", () => {
    type LeapDate = {
      year: "2024";
      month: "02";
      day: "28";
      hour: "12";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };

    type Result = ManipulateDate<LeapDate, "add", { day: 1 }>;
    type Expected = {
      year: "2024";
      month: "02";
      day: "29";
      hour: "12";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
    };
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});
