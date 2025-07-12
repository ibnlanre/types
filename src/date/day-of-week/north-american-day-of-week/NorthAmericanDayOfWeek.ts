import type { Modulo, Subtract } from "@ibnlanre/types";
import type { GregorianDayOfWeek } from "../gregorian-day-of-week";

/**
 * Calculates the North American day of the week for a given Gregorian date.
 * The result is a number representing the day of the week, where 0 = Monday, 1 = Tuesday, ..., 6 = Sunday.
 *
 * @template Year - The year of the date as a string (e.g., "2023").
 * @template Month - The month of the date as a string (e.g., "01" for January).
 * @template Day - The day of the month as a string (e.g., "01" for the first day).
 * @returns A number representing the North American day of the week.
 */
export type NorthAmericanDayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string
> = GregorianDayOfWeek<Year, Month, Day> extends infer DayOfWeek
  ? DayOfWeek extends number
    ? Modulo<Subtract<DayOfWeek, 1>, 7, "Euclidean">
    : never
  : never;
