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
import type { TimeZones, ZoneData } from "../TimeZones";
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

export type AdvancedFormat<In extends string, Out extends DateFormat> =
  In extends "Q"
    ? Stringify<QuarterOfYear<Get<Out, "month">>>
    : In extends "Qo"
    ? Ordinal<QuarterOfYear<Get<Out, "month">>>
    : In extends "Do"
    ? Ordinal<ParseInt<Get<Out, "day">>>
    : In extends "DDD" | "DDDo" | "DDDD"
    ? DayOfYearBranch<In, Out>
    : In extends "k" | "kk"
    ? HourOfDayBranch<In, Out>
    : In extends "X" | "x"
    ? TimestampBranch<In, Out>
    : In extends "w" | "ww" | "wo"
    ? GregorianWeekBranch<In, Out>
    : In extends "W" | "WW"
    ? ISOWeekBranch<In, Out>
    : In extends "gggg" | "GGGG"
    ? Get<Out, "year">
    : In extends "z" | "zz"
    ? TimeZoneBranch<In, Out>
    : never;

type DayOfYearBranch<
  In extends "DDD" | "DDDo" | "DDDD",
  Out extends DateFormat,
  Y extends string = Get<Out, "year">,
  M extends string = Get<Out, "month">,
  D extends string = Get<Out, "day">,
  N extends number = DayOfYear<ParseInt<Y>, ParseInt<M>, ParseInt<D>>,
  S extends string = Stringify<N>
> = In extends "DDD"
  ? TrimStart<S>
  : In extends "DDDo"
  ? Ordinal<N>
  : PadStart<S, 3>;

type HourOfDayBranch<
  In extends "k" | "kk",
  Out extends DateFormat,
  H extends string = Stringify<HourOfDay<Get<Out, "hour">>>
> = In extends "k" ? H : PadStart<H, 2>;

type TimestampBranch<
  In extends "X" | "x",
  Out extends DateFormat,
  T extends string = Stringify<Get<Out, "timestamp">>
> = In extends "X" ? Substring<T, 0, 10> : T;

type GregorianWeekBranch<
  In extends "w" | "ww" | "wo",
  Out extends DateFormat,
  Y extends string = Get<Out, "year">,
  M extends string = Get<Out, "month">,
  D extends string = Get<Out, "day">,
  W extends number = GregorianWeekOfYear<Y, M, D>,
  S extends string = Stringify<W>
> = In extends "w" ? S : In extends "ww" ? PadStart<S, 2> : Ordinal<W>;

type ISOWeekBranch<
  In extends "W" | "WW",
  Out extends DateFormat,
  Y extends string = Get<Out, "year">,
  M extends string = Get<Out, "month">,
  D extends string = Get<Out, "day">,
  W extends number = ISOWeekOfYear<Y, M, D>,
  S extends string = Stringify<W>
> = In extends "W" ? S : PadStart<S, 2>;

type TimeZoneBranch<
  In extends "z" | "zz",
  Out extends DateFormat,
  TZ extends ZoneData = Get<
    TimeZones,
    Get<Out, "timezone">,
    { abbr: ""; name: "" }
  >
> = In extends "z" ? Get<TZ, "abbr"> : Get<TZ, "name">;
