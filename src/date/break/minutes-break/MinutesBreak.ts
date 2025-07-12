import type { Assign } from "@ibnlanre/types";
import type { IsMinutes } from "../../checks";

type MinutesHelper<
  m extends string,
  Output extends Record<string, string> = {}
> = Assign<Output, "minutes", m>;

/**
 * Breaks down a minute token into its components.
 * @template Token - The minute token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the minutes, optionally with additional properties.
 */
export type MinutesBreak<
  Token extends string,
  Output extends Record<string, string> = {}
> = IsMinutes<Token> extends 1
  ? Token extends `:${infer m}Z`
    ? MinutesHelper<m, Output>
    : Token extends `:${infer m}+`
    ? MinutesHelper<m, Output>
    : Token extends `:${infer m}-`
    ? MinutesHelper<m, Output>
    : Token extends `:${infer m}:`
    ? MinutesHelper<m, Output>
    : Token extends `:${infer m}`
    ? MinutesHelper<m, Output>
    : never
  : `'${Token}' is not a valid minute token.`