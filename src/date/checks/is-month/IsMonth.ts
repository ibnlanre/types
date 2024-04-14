import {
  Every,
  IsBetween,
  IsSubset,
  Length,
  ParseInt,
  Pattern,
  TTake,
} from "@ibnlanre/types";

export type IsMonth<Value extends string> = Every<
  TTake,
  [
    IsSubset<Value, Pattern<number, "-" | "", "Z" | "-" | "">>,
    IsBetween<Length<ParseInt<Value>>, 1, 2>,
    IsBetween<ParseInt<Value>, 1, 12>
  ]
>;
