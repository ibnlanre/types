import { PadStart, SetValue } from "@ibnlanre/types";
import { IsMonth } from "../../checks";

type MonthHelper<
  M extends string,
  Output extends Record<string, any> = {}
> = SetValue<Output, "month", PadStart<M, 2>>;

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
  : "The token provided is not a valid month.";
