import { SetValue } from "@ibnlanre/types";
import { IsSeconds } from "../../checks";

type SecondsHelper<
  s extends string,
  Output extends Record<string, string> = {}
> = SetValue<Output, "seconds", s>;

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
  : "The token provided is not a valid minute.";
