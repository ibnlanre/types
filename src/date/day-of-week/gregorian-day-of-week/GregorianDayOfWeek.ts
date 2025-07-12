import type {
  Add,
  Addition,
  Divide,
  Floor,
  Modulo,
  Multiply,
  ParseInt,
  Subtract,
} from "@ibnlanre/types";

type GregorianDayOfWeekHelper<
  Year extends string,
  Month extends string,
  Day extends string,
  q extends number = ParseInt<Day>,
  m extends number = Month extends "01" | "02"
    ? Add<ParseInt<Month>, 12>
    : ParseInt<Month>,
  k extends number = Month extends "01" | "02"
    ? Subtract<ParseInt<Year>, 1>
    : ParseInt<Year>,
  K extends number = Modulo<k, 100, "Truncating">,
  J extends number = Floor<Divide<k, 100>>,
  ZDate extends number = Floor<Divide<Multiply<13, Add<m, 1>>, 5>>,
  ZYear extends number = Addition<
    [Subtract<Floor<Divide<J, 4>>, Multiply<J, 2>>, Floor<Divide<K, 4>>, K]
  >,
  h extends number = Modulo<Addition<[q, ZDate, ZYear]>, 7, "Knuthian">
> = h;

/**
 * Calculates the day of the week for a given Gregorian date using Zeller's congruence.
 * The result is a number representing the day of the week, where 0 = Sunday, 1 = Monday, ..., 6 = Saturday.
 *
 * This implementation uses Zeller's congruence formula:
 * h = (q + floor(13(m+1)/5) + k + floor(k/4) + floor(j/4) - 2j) mod 7
 * where:
 * - q is the day of the month (1-31)
 * - m is the month (3-14, where January=13 and February=14 of the previous year)
 * - k is the year % 100
 * - j is the century (floor(year/100))
 *
 * @template Year - The year of the date as a string (e.g., "2023")
 * @template Month - The month of the date as a string (e.g., "01" for January)
 * @template Day - The day of the month as a string (e.g., "01" for the first day)
 * @returns A number representing the day of the week (0 = Sunday, ..., 6 = Saturday)
 */
export type GregorianDayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string
> = GregorianDayOfWeekHelper<Year, Month, Day>;
