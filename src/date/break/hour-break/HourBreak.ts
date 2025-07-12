import type { Assign } from "@ibnlanre/types";
import type { IsHour } from "../../checks";

/**
 * Breaks down a time token into its hour component.
 * @template Token - The time token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the hour, optionally with additional properties.
 */
export type HourBreak<
  Token extends string,
  Output extends Record<string, string> = {}
> = IsHour<Token> extends 1
  ? Token extends `T${infer H}:`
    ? Assign<Output, "hour", H>
    : never
  : `'${Token}' is not a valid hour token.`;