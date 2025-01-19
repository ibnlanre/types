import type {
  Add,
  Addition,
  Combine,
  Get,
  Multiply,
  ParseInt,
  Replace,
  Subtract,
} from "@ibnlanre/types";

import type { EpochDateFormat, DateFormat } from "../DateFormat";
import type { DayOfYear } from "../day-of-year";
import type { IsLeapYear } from "../leap-year/IsLeapYear";
import type { LeapYearsSince } from "../leap-year";

type DaysToMs<Days extends number> = Multiply<Days, 86400000>;
type HoursToMs<Hours extends number> = Multiply<Hours, 3600000>;
type MinutesToMs<Minutes extends number> = Multiply<Minutes, 60000>;
type SecondsToMs<Seconds extends number> = Multiply<Seconds, 1000>;

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
  LeapYears extends number = LeapYearsSince<Year>,
  Epoch extends number = Subtract<Year, 1970>,
  DaysOfPeriod extends number = DayOfYear<Year, Month, Day>,
  NonLeapYears extends number = Subtract<Epoch, LeapYears>,
  EpochDays extends number = Add<
    Multiply<NonLeapYears, 365>,
    Multiply<LeapYears, 366>
  >,
  Days extends number = Add<EpochDays, Subtract<DaysOfPeriod, 1>>,
  Hours extends number = Subtract<Hour, Timezone>
> = [
  Year,
  Month,
  Day,
  Hour,
  Minutes,
  Seconds,
  Milliseconds,
  Timezone,
  Epoch,
  LeapYears,
  DaysOfPeriod,
  NonLeapYears,
  EpochDays,
  Days,
  Hours
];

//   EpochToDateInMs<
//   DaysToMs<Days>,
//   HoursToMs<Hours>,
//   MinutesToMs<Minutes>,
//   SecondsToMs<Seconds>,
//   Milliseconds
// >;

export type UnixTimestamp<Date extends Partial<DateFormat>> = Combine<
  [EpochDateFormat, Date]
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

type Test = UnixTimestamp<{
  month: "01";
  day: "01";
  hour: "00";
  minutes: "00";
  seconds: "00";
  milliseconds: "000";
  timezone: "+00:00";
  year: "0012";
}>;
