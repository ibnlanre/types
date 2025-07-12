import type { Add, Modulo } from "@ibnlanre/types";
import type { GregorianDayOfWeek } from "../gregorian-day-of-week";

/**
 * Calculates the ISO day of the week for a given Gregorian date.
 * The result is a number representing the ISO day of the week, where 1 = Monday, 2 = Tuesday, ..., 7 = Sunday.
 *
 * @template Year - The year of the date as a string (e.g., "2023").
 * @template Month - The month of the date as a string (e.g., "01" for January).
 * @template Day - The day of the month as a string (e.g., "01" for the first day).
 * 
 * @returns A number representing the ISO day of the week.
 */
export type ISODayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string
> = GregorianDayOfWeek<Year, Month, Day> extends infer DayOfWeek
  ? DayOfWeek extends number
    ? Add<Modulo<Add<DayOfWeek, 5>, 7, "Euclidean">, 1>
    : never
  : never;
