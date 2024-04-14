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

export type IsHour<Value extends string> = Every<
  TTake,
  [
    IsSubType<Value, Pattern<number, "T", ":">>,
    IsBetween<ParseInt<Value>, 0, 23>,
    Equal<Length<ParseInt<Value>>, 2>
  ]
>;
