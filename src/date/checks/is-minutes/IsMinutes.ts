import {
  Equal,
  Every,
  IsBetween,
  IsSubType,
  Length,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";

export type IsMinutes<Value extends string> = Every<
  TTake,
  [
    IsSubType<Value, Pattern<number, ":", "Z" | ":" | "+" | "-" | "">>,
    IsBetween<ParseInt<Value>, 0, 59>,
    Equal<Length<ParseInt<Value>>, 2>
  ]
>;
