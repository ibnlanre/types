import { Get } from "@ibnlanre/types";

import {
  GregorianDayOfWeek,
  ISODayOfWeek,
  NorthAmericanDayOfWeek,
} from "../day-of-week";

import { GregorianWeekDays } from "./GregorianWeekDays";
import { ISOWeekDays } from "./ISOWeekDays";
import { NorthAmericanWeekDays } from "./NorthAmericanWeekDays";

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
