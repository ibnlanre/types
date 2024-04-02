import { GregorianDayOfWeek } from "./GregorianDayOfWeek";
import { ISODayOfWeek } from "./ISODayOfWeek";
import { NorthAmericanDayOfWeek } from "./NorthAmericanDayOfWeek";

export type DayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string,
  Format extends "Gregorian" | "ISO" | "North_American" = "North_American"
> = Format extends "Gregorian"
  ? GregorianDayOfWeek<Year, Month, Day>
  : Format extends "ISO"
  ? ISODayOfWeek<Year, Month, Day>
  : NorthAmericanDayOfWeek<Year, Month, Day>;
