import type {
  Every,
  IsBetween,
  IsSubtype,
  Length,
  LessThanOrEqual,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";
import type { Minute } from "src/date/Time";

/**
 * Checks if a given string value is a valid representation of minutes.
 * A valid minutes representation is defined as a string that matches the pattern of a minute in a time,
 * such as "00", "30", or "59", and falls within the range of 0 to 59.
 *
 * @template Value - The string value to check.
 * @returns A boolean indicating whether the value is a valid minutes representation.
 */
export type IsMinutes<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<Minute, ":", "Z" | ":" | "+" | "-" | "">>,
    IsBetween<ParseInt<Value>, 0, 59>,
    LessThanOrEqual<Length<ParseInt<Value>>, 2>
  ]
>;
