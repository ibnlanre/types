import {
  Every,
  IsBetween,
  IsSubset,
  Length,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";

export type IsDay<Value extends string> = Every<
  TTake,
  [
    IsSubset<Value, Pattern<number, "-", "Z" | "T" | "">>,
    IsBetween<Length<ParseInt<Value>>, 1, 2>,
    IsBetween<ParseInt<Value>, 1, 31>
  ]
>;
