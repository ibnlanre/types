import type { And, Not } from "@ibnlanre/types";
import type {
  IsDay,
  IsHour,
  IsMilliseconds,
  IsMinutes,
  IsMonth,
  IsSeconds,
  IsTimeZone,
  IsYear,
} from "../../checks";

import type { Has } from "@ibnlanre/object";
import type { DayBreak } from "../day-break";
import type { HourBreak } from "../hour-break";
import type { MillisecondsBreak } from "../milliseconds-break";
import type { MinutesBreak } from "../minutes-break";
import type { MonthBreak } from "../month-break";
import type { SecondsBreak } from "../seconds-break";
import type { TimeZoneBreak } from "../time-zone-break";
import type { YearBreak } from "../year-break";

export type PeriodBreak<
  Token extends string,
  Output extends Record<string, any> = {}
> = And<IsYear<Token>, Not<Has<Output, "year">>> extends 1
  ? YearBreak<Token, Output>
  : And<IsMonth<Token>, Not<Has<Output, "month">>> extends 1
  ? MonthBreak<Token, Output>
  : And<IsDay<Token>, Not<Has<Output, "day">>> extends 1
  ? DayBreak<Token, Output>
  : And<IsHour<Token>, Not<Has<Output, "hour">>> extends 1
  ? HourBreak<Token, Output>
  : And<IsMinutes<Token>, Not<Has<Output, "minutes">>> extends 1
  ? MinutesBreak<Token, Output>
  : And<IsSeconds<Token>, Not<Has<Output, "seconds">>> extends 1
  ? SecondsBreak<Token, Output>
  : And<IsMilliseconds<Token>, Not<Has<Output, "milliseconds">>> extends 1
  ? MillisecondsBreak<Token, Output>
  : IsTimeZone<Token> extends 1
  ? TimeZoneBreak<Token, Output>
  : "Invalid Date";
