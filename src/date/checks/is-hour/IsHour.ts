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
 * Checks if a given string value is a valid hour representation.
 * A valid hour is defined as a string that matches the pattern of an hour in a time,
 * such as "00", "12", or "23", and falls within the range of 0 to 23.
 *
 * @template Value - The string value to check.
 * @returns A boolean indicating whether the value is a valid hour.
 */
export type IsHour<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<number, "T", ":">>,
    IsBetween<ParseInt<Value>, 0, 23>,
    IsBetween<Length<ParseInt<Value>>, 1, 2>
  ]
>;
