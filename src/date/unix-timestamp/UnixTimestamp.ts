import type {
  Addition,
  Combine,
  Get,
  ParseInt,
  Replace,
} from "@ibnlanre/types";
import type { Add, Multiply, Subtract } from "ts-arithmetic";

import type { BaseDateFormat, DateFormat } from "../DateFormat";
import type { DayOfYear } from "../day-of-year";
import type { IsLeapYear } from "../IsLeapYear";

type DaysToMs<Days extends number> = Multiply<Days, 86400000>;
type HoursToMs<Hours extends number> = Multiply<Hours, 3600000>;
type MinutesToMs<Minutes extends number> = Multiply<Minutes, 60000>;
type SecondsToMs<Seconds extends number> = Multiply<Seconds, 1000>;

type LeapYearsSinceHelper<
  Year extends number,
  Period extends number,
  Stream extends number = 0,
  PreviousYear extends number = Subtract<Year, 1>
> = Year extends Period
  ? Stream
  : LeapYearsSinceHelper<
      PreviousYear,
      Period,
      IsLeapYear<PreviousYear> extends 1 ? Add<Stream, 1> : Stream
    >;

type LeapYearsSince<
  Year extends number,
  Period extends number = 1970
> = LeapYearsSinceHelper<Year, Period> extends infer Count
  ? Count extends number
    ? Count
    : never
  : never;

type EpochToDateInMs<
  Days extends number,
  Hours extends number,
  Minutes extends number,
  Seconds extends number,
  Milliseconds extends number
> = Addition<[Days, Hours, Minutes, Seconds, Milliseconds]>;

type UnixTimestampHelper<
  Year extends number,
  Month extends number,
  Day extends number,
  Hour extends number,
  Minutes extends number,
  Seconds extends number,
  Milliseconds extends number,
  Timezone extends number,
  Epoch extends number = Subtract<Year, 1970>,
  LeapYears extends number = LeapYearsSince<Year>,
  DaysOfPeriod extends number = DayOfYear<Year, Month, Day>,
  NonLeapYears extends number = Subtract<Epoch, LeapYears>,
  EpochDays extends number = Add<
    Multiply<NonLeapYears, 365>,
    Multiply<LeapYears, 366>
  >,
  Days extends number = Add<EpochDays, Subtract<DaysOfPeriod, 1>>,
  Hours extends number = Subtract<Hour, Timezone>
> = EpochToDateInMs<
  DaysToMs<Days>,
  HoursToMs<Hours>,
  MinutesToMs<Minutes>,
  SecondsToMs<Seconds>,
  Milliseconds
>;

export type UnixTimestamp<Date extends Partial<DateFormat>> = Combine<
  [BaseDateFormat, Date]
> extends infer Date
  ? Date extends DateFormat
    ? UnixTimestampHelper<
        ParseInt<Get<Date, "year">>,
        ParseInt<Get<Date, "month">>,
        ParseInt<Get<Date, "day">>,
        ParseInt<Get<Date, "hour">>,
        ParseInt<Get<Date, "minutes">>,
        ParseInt<Get<Date, "seconds">>,
        ParseInt<Get<Date, "milliseconds">>,
        ParseInt<Replace<Get<Date, "timezone">, "0" | ":" | "+", "">, "Signed">
      >
    : never
  : never;

type Date = {
  year: "2024";
  month: "03";
  day: "24";
  hour: "01";
  minutes: "12";
  timezone: "+01:00";
};
type Test = UnixTimestamp<Date>;
