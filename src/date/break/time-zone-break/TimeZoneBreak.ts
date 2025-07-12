import type { Assign, Contains, Place } from "@ibnlanre/types";
import type { IsTimeZone } from "../../checks";

type TimeZoneHelper<Token extends string> = Contains<Token, ":"> extends 1
  ? Token
  : Place<Token, ":", -2>;

/**
 * Breaks down a timezone token into its components.
 * @template Token - The timezone token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the timezone, optionally with additional properties.
 */
export type TimeZoneBreak<
  Token extends string,
  Output extends Record<string, string> = {}
> = IsTimeZone<Token> extends 1
  ? Assign<Output, "timezone", TimeZoneHelper<Token>>
  : `'${Token}' is not a valid timezone token.`