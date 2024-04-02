import { SetValue } from "@ibnlanre/types";
import { IsMinutes } from "../../checks";

type MinutesHelper<
  m extends string,
  Output extends Record<string, string> = {}
> = SetValue<Output, "minutes", m>;

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
  : "The token provided is not a valid minute.";
