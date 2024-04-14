import {
  Equal,
  Every,
  IsBetween,
  IsSubset,
  Length,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";

export type IsHour<Value extends string> = Every<
  TTake,
  [
    IsSubset<Value, Pattern<number, "T", ":">>,
    IsBetween<ParseInt<Value>, 0, 23>,
    Equal<Length<ParseInt<Value>>, 2>
  ]
>;
