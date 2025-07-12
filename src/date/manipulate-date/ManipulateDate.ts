import type {
  Add,
  Addition,
  FallbackTo,
  InferNumber,
  Multiply,
  Subtract,
} from "@ibnlanre/types";

import type { DateFormat } from "../DateFormat";
import type { TimestampToDate } from "../timestamp-to-date";
import type { UnixTimestamp } from "../unix-timestamp";

type MillisecondsPerSecond = 1000;
type MillisecondsPerMinute = 60000; // 60 * 1000
type MillisecondsPerHour = 3600000; // 60 * 60 * 1000
type MillisecondsPerDay = 86400000; // 24 * 60 * 60 * 1000

type DaysToMs<Days extends number> = Multiply<Days, MillisecondsPerDay>;
type HoursToMs<Hours extends number> = Multiply<Hours, MillisecondsPerHour>;
type MinutesToMs<Minutes extends number> = Multiply<
  Minutes,
  MillisecondsPerMinute
>;
type SecondsToMs<Seconds extends number> = Multiply<
  Seconds,
  MillisecondsPerSecond
>;

type DateUnit = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  timezone: number;
};

type BaseDateUnit = {
  year: 0;
  month: 0;
  day: 0;
  hour: 0;
  minutes: 0;
  seconds: 0;
  milliseconds: 0;
  timezone: 0;
};

type InferDateUnit<
  Year extends number,
  Month extends number,
  Day extends number,
  Hour extends number,
  Minutes extends number,
  Seconds extends number,
  Milliseconds extends number,
  Timezone extends number
> = {
  year: Year;
  month: Month;
  day: Day;
  hour: Hour;
  minutes: Minutes;
  seconds: Seconds;
  milliseconds: Milliseconds;
  timezone: Timezone;
};

type MergeDateUnits<Units extends Partial<DateUnit>> = {
  [K in keyof BaseDateUnit]: FallbackTo<Units[K], BaseDateUnit[K]>;
};

type UnitsToMs<
  Units extends Partial<DateUnit>,
  MergedDateUnits extends DateUnit = MergeDateUnits<Units>
> = MergedDateUnits extends InferDateUnit<
  infer Year,
  infer Month,
  infer Day,
  infer Hour,
  infer Minutes,
  infer Seconds,
  infer Milliseconds,
  infer Timezone
>
  ? Addition<
      [
        DaysToMs<Multiply<Year, 365>>,
        DaysToMs<Multiply<Month, 30>>,
        DaysToMs<Day>,
        HoursToMs<Subtract<Hour, Timezone>>,
        MinutesToMs<Minutes>,
        SecondsToMs<Seconds>,
        Milliseconds
      ]
    >
  : never;

export type AddDate<
  Date extends Partial<DateFormat>,
  Units extends Partial<DateUnit>
> = UnitsToMs<Units> extends InferNumber<infer UnitsInMs>
  ? UnixTimestamp<Date> extends InferNumber<infer Timestamp>
    ? Add<Timestamp, UnitsInMs> extends InferNumber<infer Result>
      ? TimestampToDate<Result>
      : never
    : never
  : never;

export type SubtractDate<
  Date extends Partial<DateFormat>,
  Units extends Partial<DateUnit>
> = UnitsToMs<Units> extends InferNumber<infer UnitsInMs>
  ? UnixTimestamp<Date> extends InferNumber<infer Timestamp>
    ? Subtract<Timestamp, UnitsInMs> extends InferNumber<infer Result>
      ? TimestampToDate<Result>
      : never
    : never
  : never;

export type ManipulateDate<
  Date extends Partial<DateFormat>,
  Operation extends "add" | "subtract",
  Units extends Partial<DateUnit>
> = Operation extends "add" ? AddDate<Date, Units> : SubtractDate<Date, Units>;
