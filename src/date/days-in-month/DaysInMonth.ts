import type { IsLeapYear } from "../leap-year/is-leap-year/IsLeapYear";

/**
 * Calculates the number of days in a given month of a specific year.
 *
 * @template Month - The month of the date, represented as a number (1-12).
 * @template Year - The year of the date, represented as a number.
 *
 * @returns The number of days in the specified month and year.
 */
export type DaysInMonth<
  Month extends number,
  Year extends number
> = Month extends 2
  ? IsLeapYear<Year> extends 1
    ? 29
    : 28
  : Month extends 4 | 6 | 9 | 11
  ? 30
  : 31;
