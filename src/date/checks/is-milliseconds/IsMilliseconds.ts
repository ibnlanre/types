import type { And, EndsWith, IsSubtype, Not, Pattern } from "@ibnlanre/types";

/**
 * Checks if a given string value is a valid representation of milliseconds.
 * A valid milliseconds representation is defined as a string that matches the pattern of a number
 * with an optional decimal point and an optional timezone offset, and does not end with a decimal point.
 *
 * @template Value - The string value to check.
 * @returns A boolean indicating whether the value is a valid milliseconds representation.
 */
export type IsMilliseconds<Value extends string> = And<
  IsSubtype<Value, Pattern<number, ".", "Z" | "+" | "-" | "">>,
  Not<EndsWith<Value, ".">>
>;
