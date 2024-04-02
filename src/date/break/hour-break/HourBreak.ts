import { SetValue } from "@ibnlanre/types";
import { IsHour } from "../../checks";

export type HourBreak<
  Token extends string,
  Output extends Record<string, string> = {}
> = IsHour<Token> extends 1
  ? Token extends `T${infer H}:`
    ? SetValue<Output, "hour", H>
    : never
  : "The token provided is not a valid hour.";
