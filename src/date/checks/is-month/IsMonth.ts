import type {
  Every,
  IsBetween,
  IsSubtype,
  Length,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";

/**
 * Checks if a given string value is a valid day representation.
 * A valid day is defined as a string that matches the pattern of a day in a date,
 * such as "01", "15", or "31", and falls within the range of 1 to 31.
 *
 * @template Value - The string value to check.
 * @returns A boolean indicating whether the value is a valid day.
 */
export type IsMonth<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<number, "-" | "", "Z" | "-" | "">>,
    IsBetween<Length<ParseInt<Value>>, 1, 2>,
    IsBetween<ParseInt<Value>, 1, 12>
  ]
>;
