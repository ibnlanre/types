import type { GregorianWeekOfYear } from "./GregorianWeekOfYear";
import type { ISOWeekOfYear } from "./ISOWeekOfYear";

export type WeekOfYear<
  Year extends string,
  Month extends string,
  Day extends string,
  Calendar extends "Gregorian" | "ISO" = "Gregorian"
> = Calendar extends "Gregorian"
  ? GregorianWeekOfYear<Year, Month, Day>
  : ISOWeekOfYear<Year, Month, Day>;
