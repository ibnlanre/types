import type { Add, Subtract } from "@ibnlanre/types";
import type { DaysInMonth } from "../days-in-month";

type DayOfYearHelper<
  Year extends number,
  Month extends number,
  Stream extends number
> = Month extends 0
  ? Stream
  : DayOfYearHelper<
      Year,
      Subtract<Month, 1>,
      Add<Stream, DaysInMonth<Month, Year>>
    > extends infer R
  ? R extends number
    ? R
    : never
  : never;

/**
 * Calculates the day of the year for a given date.
 * 
 * @template Year - The year of the date, represented as a number.
 * @template Month - The month of the date, represented as a number (1-12).
 * @template Day - The day of the date, represented as a number (1-31).
 * 
 * @returns The day of the year as a number, or never if the input is invalid.
 */
export type DayOfYear<
  Year extends number,
  Month extends number,
  Day extends number
> = DayOfYearHelper<Year, Subtract<Month, 1>, Day> extends infer R
  ? R extends number
    ? R
    : never
  : never;
