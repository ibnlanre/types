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

export type IsSeconds<Value extends string> = Every<
  TTake,
  [
    IsSubset<Value, Pattern<number, ":", "Z" | "." | "+" | "-" | "">>,
    IsBetween<ParseInt<Value>, 0, 59>,
    Equal<Length<ParseInt<Value>>, 2>
  ]
>;
