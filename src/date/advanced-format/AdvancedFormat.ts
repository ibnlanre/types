import type {
  Get,
  Ordinal,
  PadStart,
  ParseInt,
  Stringify,
  Substring,
  TrimStart,
} from "@ibnlanre/types";

import type { DateFormat } from "../DateFormat";
import type { DayOfYear } from "../day-of-year";
import type { HourOfDay } from "../hour-of-day";
import type { QuarterOfYear } from "../quarter-of-year";
import type { TimeZones } from "../TimeZones";
import type { GregorianWeekOfYear } from "../week-of-year/gregorian-week-of-year";
import type { ISOWeekOfYear } from "../week-of-year/iso-week-of-year";

export type AdvancedFormatSymbols =
  | "Q"
  | "Qo"
  | "Do"
  | "DDD"
  | "DDDo"
  | "DDDD"
  | "k"
  | "kk"
  | "X"
  | "x"
  | "w"
  | "ww"
  | "W"
  | "WW"
  | "wo"
  | "gggg"
  | "GGGG"
  | "z"
  | "zz";

type ZoneData = {
  abbr: string;
  name: string;
};

export type AdvancedFormat<
  In extends string,
  Out extends DateFormat,
  Year extends string = Get<Out, "year">,
  Month extends string = Get<Out, "month">,
  Hour extends string = Get<Out, "hour">,
  Day extends string = Get<Out, "day">,
  HourOfTheDay extends string = Stringify<HourOfDay<Hour>>,
  WeekOfTheYear extends number = GregorianWeekOfYear<Year, Month, Day>,
  WeekOfTheYearISO extends number = ISOWeekOfYear<Year, Month, Day>,
  DayOfTheYear extends string = Stringify<
    DayOfYear<ParseInt<Year>, ParseInt<Month>, ParseInt<Day>>
  >,
  TimeZone extends ZoneData = Get<
    TimeZones,
    Get<Out, "timezone">,
    { abbr: ""; name: "" }
  >
> = In extends "Q"
  ? Stringify<QuarterOfYear<Get<Out, "month">>>
  : In extends "Qo"
  ? Ordinal<QuarterOfYear<Get<Out, "month">>>
  : In extends "Do"
  ? Ordinal<ParseInt<Get<Out, "day">>>
  : In extends "DDD"
  ? TrimStart<DayOfTheYear>
  : In extends "DDDo"
  ? Ordinal<ParseInt<DayOfTheYear>>
  : In extends "DDDD"
  ? PadStart<DayOfTheYear, 3>
  : In extends "k"
  ? HourOfTheDay
  : In extends "kk"
  ? PadStart<HourOfTheDay, 2>
  : In extends "X"
  ? Substring<Stringify<Get<Out, "timestamp">>, 0, 10>
  : In extends "x"
  ? Stringify<Get<Out, "timestamp">>
  : In extends "w"
  ? Stringify<WeekOfTheYear>
  : In extends "wo"
  ? Ordinal<WeekOfTheYear>
  : In extends "ww"
  ? PadStart<Stringify<WeekOfTheYear>, 2>
  : In extends "W"
  ? Stringify<WeekOfTheYearISO>
  : In extends "wo"
  ? Ordinal<WeekOfTheYearISO>
  : In extends "WW"
  ? PadStart<Stringify<WeekOfTheYearISO>, 2>
  : In extends "gggg"
  ? Year
  : In extends "GGGG"
  ? Year
  : In extends "z"
  ? Get<TimeZone, "abbr">
  : In extends "zz"
  ? Get<TimeZone, "name">
  : never;
