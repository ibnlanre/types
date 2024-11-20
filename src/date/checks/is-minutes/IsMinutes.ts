import type {
  Every,
  IsBetween,
  IsSubtype,
  Length,
  LessThanOrEqual,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";
import type { Minute } from "src/date/Time";

export type IsMinutes<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<Minute, ":", "Z" | ":" | "+" | "-" | "">>,
    IsBetween<ParseInt<Value>, 0, 59>,
    LessThanOrEqual<Length<ParseInt<Value>>, 2>
  ]
>;
