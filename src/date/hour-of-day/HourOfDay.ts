import type { Modulo, ParseInt } from "@ibnlanre/types";

/**
 * Calculates the hour of the day based on a given meridiem string.
 * The result is a number representing the hour in either 12-hour or 24-hour format.
 *
 * @template Meridiem - The meridiem string, which can be "AM", "PM", or a number as a string.
 * @template Out - The output format, either 12 or 24 (default is 24).
 * @returns A number representing the hour of the day.
 */
export type HourOfDay<
  Meridiem extends string,
  Out extends 12 | 24 = 24
> = Modulo<ParseInt<Meridiem>, Out> extends infer R extends number
  ? R extends 0
    ? Out extends 12
      ? 12
      : 0
    : R
  : never;
