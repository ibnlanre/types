import {
  Every,
  IsBetween,
  IsSubType,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";

export type IsDay<Value extends string> = Every<
  [
    IsSubType<Value, Pattern<number, "-", "Z" | "T" | "">>,
    IsBetween<Length<ParseInt<Value>>, 1, 2>,
    IsBetween<ParseInt<Value>, 1, 31>
  ]
>;
