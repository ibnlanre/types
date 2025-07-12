import type { Assign } from "@ibnlanre/types";
import type { IsMilliseconds } from "../../checks";

/**
 * Breaks down a millisecond token into its components.
 * @template Token - The millisecond token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the milliseconds, optionally with additional properties.
 */
export type MillisecondsBreak<
  Token extends string,
  Output extends Record<string, any> = {}
> = IsMilliseconds<Token> extends 1
  ? Token extends `.${infer ms}Z`
    ? Assign<Output, "milliseconds", ms>
    : Token extends `.${infer ms}+`
    ? Assign<Output, "milliseconds", ms>
    : Token extends `.${infer ms}-`
    ? Assign<Output, "milliseconds", ms>
    : never
  : `'${Token}' is not a valid millisecond token.`;