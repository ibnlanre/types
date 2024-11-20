import type {
  Equal,
  Every,
  IsBetween,
  IsSubtype,
  Length,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";
import type { Hour } from "src/date/Time";

export type IsHour<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<Hour, "T", ":">>,
    IsBetween<ParseInt<Value>, 0, 23>,
    Equal<Length<ParseInt<Value>>, 2>
  ]
>;
