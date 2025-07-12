import type { GregorianDayOfWeek } from "./gregorian-day-of-week";
import type { ISODayOfWeek } from "./iso-day-of-week";
import type { NorthAmericanDayOfWeek } from "./north-american-day-of-week";

/**
 * Represents the day of the week for a given date in different formats.
 *
 * @template Year - The year of the date, represented as a string.
 * @template Month - The month of the date, represented as a string.
 * @template Day - The day of the date, represented as a string.
 * @template Format - The format of the date, which can be "Gregorian", "ISO", or "North_American".
 *
 * @returns The day of the week for the specified date in the specified format.
 */
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
