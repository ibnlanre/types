import type { Assign } from "@ibnlanre/types";
import type { IsSeconds } from "../../checks";

type SecondsHelper<
  s extends string,
  Output extends Record<string, string> = {}
> = Assign<Output, "seconds", s>;

/**
 * Breaks down a seconds token into its components.
 * @template Token - The seconds token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the seconds, optionally with additional properties.
 */
export type SecondsBreak<
  Token extends string,
  Output extends Record<string, string> = {}
> = IsSeconds<Token> extends 1
  ? Token extends `:${infer s}Z`
    ? SecondsHelper<s, Output>
    : Token extends `:${infer s}+`
    ? SecondsHelper<s, Output>
    : Token extends `:${infer s}-`
    ? SecondsHelper<s, Output>
    : Token extends `:${infer s}.`
    ? SecondsHelper<s, Output>
    : Token extends `:${infer s}`
    ? SecondsHelper<s, Output>
    : never
  : `'${Token}' is not a valid seconds token.`