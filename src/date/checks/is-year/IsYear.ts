import type {
  And,
  GreaterThanOrEqual,
  IsSubtype,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";

/**
 * Checks if a given string value is a valid representation of a year.
 * A valid year representation is defined as a string that matches the pattern of a year,
 * such as "2023", "1999", or "0001", and has a length of at least 3 characters.
 *
 * @template Value - The string value to check.
 * @returns A boolean indicating whether the value is a valid year representation.
 */
export type IsYear<Value extends string> = And<
  GreaterThanOrEqual<Length<ParseInt<Value>>, 3>,
  IsSubtype<Value, Pattern<number, "-" | "", "Z" | "-" | "">>
>;
