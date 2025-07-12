import type {
  Add,
  Divide,
  Floor,
  GreaterThan,
  InferNumber,
  LessThan,
  Modulo,
  Multiply,
  PadStart,
  Subtract,
} from "@ibnlanre/types";

import type { DaysInMonth } from "../days-in-month";
import type { LeapYearsSince } from "../leap-year";

type MillisecondsPerSecond = 1000;
type MillisecondsPerMinute = 60000; // 60 * 1000
type MillisecondsPerHour = 3600000; // 60 * 60 * 1000
type MillisecondsPerDay = 86400000; // 24 * 60 * 60 * 1000

type ExtractTimeComponents<
  Days extends number,
  Hours extends number = Modulo<Days, MillisecondsPerDay>,
  Minutes extends number = Modulo<Days, MillisecondsPerHour>,
  Seconds extends number = Modulo<Days, MillisecondsPerMinute>
> = {
  days: Divide<Days, MillisecondsPerDay>;
  hours: Divide<Hours, MillisecondsPerHour, "Floored">;
  minutes: Divide<Minutes, MillisecondsPerMinute, "Floored">;
  seconds: Divide<Seconds, MillisecondsPerSecond, "Floored">;
  milliseconds: Modulo<Days, MillisecondsPerSecond>;
};

type CalculateYearSinceEpoch<
  Days extends number,
  YearsSinceEpoch extends number = Divide<Days, 366, "Floored">,
  ApproximateYear extends number = Add<1970, YearsSinceEpoch>,
  LeapYears extends number = LeapYearsSince<Subtract<ApproximateYear, 1>>
> = {
  approximateYear: ApproximateYear;
  remainingDays: Floor<
    Subtract<
      Days,
      Add<
        Multiply<Subtract<YearsSinceEpoch, LeapYears>, 365>,
        Multiply<LeapYears, 366>
      >
    >
  >;
};

type CalculateMonthAndDay<
  Year extends number,
  RemainingDays extends number,
  CurrentMonth extends number = 1
> = DaysInMonth<CurrentMonth, Year> extends InferNumber<
  infer DaysInCurrentMonth
>
  ? GreaterThan<CurrentMonth, 12> extends 1
    ? CalculateMonthAndDay<
        Add<Year, 1>,
        RemainingDays,
        Subtract<CurrentMonth, 12>
      >
    : LessThan<RemainingDays, DaysInCurrentMonth> extends 1
    ? {
        year: Year;
        month: CurrentMonth;
        day: Add<RemainingDays, 1>;
      }
    : CalculateMonthAndDay<
        Year,
        Subtract<RemainingDays, DaysInCurrentMonth>,
        Add<CurrentMonth, 1>
      >
  : never;

type PadNumber<Date extends number> = PadStart<Date, 2>;
type PadMilliseconds<Date extends number> = PadStart<Date, 3>;

export type TimestampToDate<T extends number> =
  ExtractTimeComponents<T> extends {
    days: infer Days extends number;
    hours: infer Hours extends number;
    minutes: infer Minutes extends number;
    seconds: infer Seconds extends number;
    milliseconds: infer Milliseconds extends number;
  }
    ? CalculateYearSinceEpoch<Days> extends {
        approximateYear: infer ApproximateYear extends number;
        remainingDays: infer RemainingDays extends number;
      }
      ? CalculateMonthAndDay<ApproximateYear, RemainingDays> extends {
          year: infer Year extends number;
          month: infer Month extends number;
          day: infer Day extends number;
        }
        ? {
            year: `${Year}`;
            month: PadNumber<Month>;
            day: PadNumber<Day>;
            hour: PadNumber<Hours>;
            minutes: PadNumber<Minutes>;
            seconds: PadNumber<Seconds>;
            milliseconds: PadMilliseconds<Milliseconds>;
            timezone: "+00:00";
          }
        : never
      : never
    : never;
