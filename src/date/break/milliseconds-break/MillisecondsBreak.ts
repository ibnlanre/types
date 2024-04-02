import type { SetValue } from "@ibnlanre/types";
import { IsMilliseconds } from "../../checks";

export type MillisecondsBreak<
  Token extends string,
  Output extends Record<string, any> = {}
> = IsMilliseconds<Token> extends 1
  ? Token extends `.${infer ms}Z`
    ? SetValue<Output, "milliseconds", ms>
    : Token extends `.${infer ms}+`
    ? SetValue<Output, "milliseconds", ms>
    : Token extends `.${infer ms}-`
    ? SetValue<Output, "milliseconds", ms>
    : never
  : "The token provided is not a valid millisecond.";
