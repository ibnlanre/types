import type {
  Add,
  Addition,
  Combine,
  InferNumber,
  Multiply,
  Subtract,
} from "@ibnlanre/types";

import type { DateFormat } from "../DateFormat";
import type { TimestampToDate } from "../timestamp-to-date";
import type { UnixTimestamp } from "../unix-timestamp";

type MS_PER_SECOND = 1000;
type MS_PER_MINUTE = 60000; // 60 * 1000
type MS_PER_HOUR = 3600000; // 60 * 60 * 1000
type MS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

type DaysToMs<Days extends number> = Multiply<Days, MS_PER_DAY>;
type HoursToMs<Hours extends number> = Multiply<Hours, MS_PER_HOUR>;
type MinutesToMs<Minutes extends number> = Multiply<Minutes, MS_PER_MINUTE>;
type SecondsToMs<Seconds extends number> = Multiply<Seconds, MS_PER_SECOND>;

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

type UnitsToMs<Units extends Partial<DateUnit>> = Combine<
  [BaseDateUnit, Units]
> extends {
  year: infer Year extends number;
  month: infer Month extends number;
  day: infer Day extends number;
  hour: infer Hour extends number;
  minutes: infer Minutes extends number;
  seconds: infer Seconds extends number;
  milliseconds: infer Milliseconds extends number;
  timezone: infer Timezone extends number;
}
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

type TimestampOperation<
  Timestamp extends number,
  UnitsInMs extends number,
  Operation extends "add" | "subtract"
> = Operation extends "add"
  ? Add<Timestamp, UnitsInMs>
  : Subtract<Timestamp, UnitsInMs>;

export type ManipulateDate<
  Date extends DateFormat,
  Operation extends "add" | "subtract",
  Units extends Partial<DateUnit>
> = UnitsToMs<Units> extends InferNumber<infer UnitsInMs>
  ? UnixTimestamp<Date> extends InferNumber<infer Timestamp>
    ? TimestampOperation<Timestamp, UnitsInMs, Operation> extends InferNumber<
        infer Timestamp
      >
      ? TimestampToDate<Timestamp>
      : never
    : never
  : never;
