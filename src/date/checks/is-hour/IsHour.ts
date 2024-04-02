import {
  Every,
  IsBetween,
  IsSubType,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";
import { Eq } from "ts-arithmetic";

export type IsHour<Value extends string> = Every<
  [
    IsSubType<Value, Pattern<number, "T", ":">>,
    IsBetween<ParseInt<Value>, 0, 23>,
    Eq<Length<ParseInt<Value>>, 2>
  ]
>;
