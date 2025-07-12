import type { Assign, PadStart } from "@ibnlanre/types";
import type { IsMonth } from "../../checks";

type MonthHelper<
  M extends string,
  Output extends Record<string, any> = {}
> = Assign<Output, "month", PadStart<M, 2>>;

/**
 * Breaks down a month token into its components.
 * @template Token - The month token to break down.
 * @template Output - An optional output type to extend with additional properties.
 * @returns A type representing the month, optionally with additional properties.
 */
export type MonthBreak<
  Token extends string,
  Output extends Record<string, any> = {}
> = IsMonth<Token> extends 1
  ? Token extends `-${infer M}Z`
    ? MonthHelper<M, Output>
    : Token extends `-${infer M}-`
    ? MonthHelper<M, Output>
    : Token extends `-${infer M}`
    ? MonthHelper<M, Output>
    : Token extends `${infer M}-`
    ? MonthHelper<M, Output>
    : Token extends `${infer M}`
    ? MonthHelper<M, Output>
    : never
  : `'${Token}' is not a valid month token.`