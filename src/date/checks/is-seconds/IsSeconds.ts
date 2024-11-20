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
import type { Second } from "src/date/Time";

export type IsSeconds<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<Second, ":", "Z" | "." | "+" | "-" | "">>,
    IsBetween<ParseInt<Value>, 0, 59>,
    LessThanOrEqual<Length<ParseInt<Value>>, 2>
  ]
>;
