import type {
  Add,
  Addition,
  Combine,
  Get,
  GreaterThan,
  Multiply,
  ParseInt,
  Replace,
  Subtract,
  Range,
  Indices,
  InferNumber,
  InferArray,
  InferString,
  KeysAsTuple,
  IsNever,
  Push,
  Values,
  Size,
} from "@ibnlanre/types";

import type { EpochDateFormat, DateFormat } from "../DateFormat";
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
> = GreaterThan<Year, Period> extends 1
  ? LeapYearsSinceHelper<Year, Period>
  : 0;

type Test1 = Range<1970, 3450>;

// extends [infer Element, ...infer Rest]
//   ? Element extends number
//     ? true
//     : false
//   : 9;

type OnlyLeapYears<
  List extends number[],
  Result extends number[] = []
> = List extends [InferNumber<infer Element>, ...InferArray<infer Rest, number>]
  ? IsLeapYear<Element> extends 1
    ? OnlyLeapYears<Rest, Push<Result, Element>>
    : OnlyLeapYears<Rest, Result>
  : Result;

type Test4 = Range<1970, 3450> extends InferArray<infer List, number>
  ? Testing<List>
  : never;

type Testing<List extends number[]> = Size<
  KeysAsTuple<{
    [Key in keyof List as Exclude<
      Key,
      keyof unknown[]
    > extends infer Index extends keyof List
      ? List[Index] extends InferNumber<infer Element>
        ? IsLeapYear<Element> extends 1
          ? Index
          : never
        : never
      : never]: List[Key];
  }>
>;

type Test5 = Testing<Test1>;

type Test2 = LeapYearsSince<3450>;
//   ^?

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
