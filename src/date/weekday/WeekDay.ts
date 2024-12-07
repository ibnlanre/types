import type { Get } from "@ibnlanre/types";

import type {
  GregorianDayOfWeek,
  ISODayOfWeek,
  NorthAmericanDayOfWeek,
} from "../day-of-week";

import type { GregorianWeekDays } from "./GregorianWeekDays";
import type { ISOWeekDays } from "./ISOWeekDays";
import type { NorthAmericanWeekDays } from "./NorthAmericanWeekDays";

export type WeekDay<
  Year extends string,
  Month extends string,
  Day extends string,
  Format extends "Gregorian" | "ISO" | "North_American" = "North_American"
> = Format extends "Gregorian"
  ? Get<GregorianWeekDays, GregorianDayOfWeek<Year, Month, Day>>
  : Format extends "ISO"
  ? Get<ISOWeekDays, ISODayOfWeek<Year, Month, Day>>
  : Get<NorthAmericanWeekDays, NorthAmericanDayOfWeek<Year, Month, Day>>;
