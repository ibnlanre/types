import type { Contains, Place, SetValue } from "@ibnlanre/types";
import { IsTimeZone } from "../../checks";

type TimeZoneHelper<Token extends string> = Contains<Token, ":"> extends 1
  ? Token
  : Place<Token, ":", -2>;

export type TimeZoneBreak<
  Token extends string,
  Output extends Record<string, string> = {}
> = IsTimeZone<Token> extends 1
  ? SetValue<Output, "timezone", TimeZoneHelper<Token>>
  : "The token provided is not a valid timezone.";
