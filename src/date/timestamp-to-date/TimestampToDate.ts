import type {
  Add,
  Divide,
  Floor,
  GreaterThan,
  LessThan,
  Modulo,
  Multiply,
  PadStart,
  Subtract,
} from "@ibnlanre/types";
import type { IsLeapYear, LeapYearsSince } from "../leap-year";

type MillisecondsPerSecond = 1000;
type MillisecondsPerMinute = 60000;
type MillisecondsPerHour = 3600000;
type MillisecondsPerDay = 86400000;

type ExtractTimeComponents<
  Days extends number,
  Hours extends number = Modulo<Days, MillisecondsPerDay>,
  Minutes extends number = Modulo<Days, MillisecondsPerHour>,
  Seconds extends number = Modulo<Days, MillisecondsPerMinute>,
  Milliseconds extends number = Modulo<Days, MillisecondsPerSecond>
> = {
  days: Divide<Days, MillisecondsPerDay>;
  hours: Divide<Hours, MillisecondsPerHour, "Floored">;
  minutes: Divide<Minutes, MillisecondsPerMinute, "Floored">;
  seconds: Divide<Seconds, MillisecondsPerSecond, "Floored">;
  milliseconds: Milliseconds;
};

type CalculateYearSinceEpoch<
  Days extends number,
  Years extends number = Divide<Days, 366, "Floored">,
  ApproximateYear extends number = Add<1970, Years>,
  LeapYears extends number = LeapYearsSince<Subtract<ApproximateYear, 1>>,
  LeapDays extends number = Multiply<LeapYears, 366>,
  NonLeapYears extends number = Subtract<Years, LeapYears>,
  NonLeapDays extends number = Multiply<NonLeapYears, 365>,
  TotalDays extends number = Add<NonLeapDays, LeapDays>,
  RemainingDays extends number = Floor<Subtract<Days, TotalDays>>
> = {
  leapYears: LeapYears;
  nonLeapYears: NonLeapYears;
  approximateYear: ApproximateYear;
  remainingDays: RemainingDays;
};

type DaysInMonth<Year extends number, Month extends number> = Month extends 2
  ? IsLeapYear<Year> extends 1
    ? 29
    : 28
  : Month extends 4 | 6 | 9 | 11
  ? 30
  : 31;

type RecalibrateMonth<
  Year extends number,
  Month extends number,
  RemainingDays extends number,
  RecalibratedYear extends number = Add<Year, 1>,
  RecalibratedMonth extends number = Subtract<Month, 12>,
  DaysInRecalibratedMonth extends number = DaysInMonth<
    RecalibratedYear,
    RecalibratedMonth
  >
> = CalculateMonthAndDay<
  RecalibratedYear,
  RemainingDays,
  RecalibratedMonth,
  DaysInRecalibratedMonth
>;

type CalculateMonthAndDay<
  Year extends number,
  RemainingDays extends number,
  CurrentMonth extends number = 1,
  DaysInCurrentMonth extends number = DaysInMonth<Year, CurrentMonth>
> = GreaterThan<CurrentMonth, 12> extends 1
  ? RecalibrateMonth<Year, CurrentMonth, RemainingDays>
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
    >;

type PadNumber<Date extends number> = PadStart<`${Date}`, 2>;
type PadMilliseconds<Date extends number> = PadStart<`${Date}`, 3>;

export type TimestampToDate<T extends number> =
  ExtractTimeComponents<T> extends {
    days: infer Days extends number;
    hours: infer Hours extends number;
    minutes: infer Minutes extends number;
    seconds: infer Seconds extends number;
    milliseconds: infer MS extends number;
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
            milliseconds: PadMilliseconds<MS>;
            timezone: "+00:00";
          }
        : never
      : never
    : never;
