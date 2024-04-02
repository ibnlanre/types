import { And, Not } from "ts-arithmetic";
import {
  IsDay,
  IsHour,
  IsMilliseconds,
  IsMinutes,
  IsMonth,
  IsSeconds,
  IsTimeZone,
  IsYear,
} from "../../checks";

import { DayBreak } from "../day-break";
import { HourBreak } from "../hour-break";
import { MillisecondsBreak } from "../milliseconds-break";
import { MinutesBreak } from "../minutes-break";
import { MonthBreak } from "../month-break";
import { SecondsBreak } from "../seconds-break";
import { TimeZoneBreak } from "../time-zone-break";
import { YearBreak } from "../year-break";
import { Has } from "@ibnlanre/object";

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
