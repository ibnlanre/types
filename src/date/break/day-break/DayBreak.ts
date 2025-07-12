import type { Assign, PadStart } from "@ibnlanre/types";
import type { IsDay } from "../../checks";

type DayHelper<
  D extends string,
  Output extends Record<string, any> = {}
> = Assign<Output, "day", PadStart<D, 2>>;

/**
 * Breaks down a day token into its components.
 * @template Token - The day token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the day, optionally with additional properties.
 */
export type DayBreak<
  Token extends string,
  Output extends Record<string, string> = {}
> = IsDay<Token> extends 1
  ? Token extends `-${infer D}Z`
  ? DayHelper<D, Output>
  : Token extends `-${infer D}T`
  ? DayHelper<D, Output>
  : Token extends `-${infer D}`
  ? DayHelper<D, Output>
  : never
  : `'${Token}' is not a valid day token.`;