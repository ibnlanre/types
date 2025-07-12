import type { GregorianWeekOfYear } from "./gregorian-week-of-year/GregorianWeekOfYear";
import type { ISOWeekOfYear } from "./iso-week-of-year/ISOWeekOfYear";

export type WeekOfYear<
  Year extends string,
  Month extends string,
  Day extends string,
  Calendar extends "Gregorian" | "ISO" = "Gregorian"
> = Calendar extends "Gregorian"
  ? GregorianWeekOfYear<Year, Month, Day>
  : ISOWeekOfYear<Year, Month, Day>;
