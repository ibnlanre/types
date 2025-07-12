import type {
  Every,
  IsBetween,
  IsSubtype,
  Length,
  Pattern,
  TTake,
} from "@ibnlanre/types";

/**
 * Checks if a given string value is a valid representation of a time zone.
 * A valid time zone representation is defined as a string that matches the pattern of a time zone,
 * such as "+01:00", "-05:30", or "Z", and has a length of 5 or 6 characters.
 *
 * @template Value - The string value to check.
 * @returns A boolean indicating whether the value is a valid time zone representation.
 */
export type IsTimeZone<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<":" | "", `${"+" | "-"}${number}`, number>>,
    IsBetween<Length<Value>, 5, 6>
  ]
>;
