import type {
  Absolute,
  Assign,
  Equal,
  IsBetween,
  Length,
  PadStart,
  ParseInt,
  Stringify,
} from "@ibnlanre/types";

import type { IsYear } from "../../checks";

type YearHelper<
  Y extends string,
  Output extends Record<string, any> = {},
  Year extends string = Stringify<Absolute<ParseInt<Y>>>,
  Size extends number = Length<Year>
> = IsBetween<ParseInt<Y>, -271820, 275759> extends 1
  ? IsBetween<Size, 5, 6> extends 1
    ? Assign<Output, "year", `+${PadStart<Year, 6>}`>
    : Equal<Size, 4> extends 1
    ? Assign<Output, "year", PadStart<Year, 4>>
    : Assign<Output, "year", Y>
  :`'${Y}' should be between -271820 and 275759, inclusive.`;

/**
 * Breaks down a year token into its components.
 * @template Token - The year token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the year, optionally with additional properties.
 */
export type YearBreak<
  Token extends string,
  Output extends Record<string, any> = {}
> = IsYear<Token> extends 1
  ? Token extends `${infer Y}Z`
    ? YearHelper<Y, Output>
    : Token extends `${infer Y}-`
    ? YearHelper<Y, Output>
    : Token extends `${infer Y}`
    ? YearHelper<Y, Output>
    : never
  : `'${Token}' is not a valid year token.`;
