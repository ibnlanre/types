import type { PadStart, SetValue } from "@ibnlanre/types";
import { IsDay } from "../../checks";

type DayHelper<
  D extends string,
  Output extends Record<string, any> = {}
> = SetValue<Output, "day", PadStart<D, 2>>;

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
  : "The token provided is not a valid day.";
