import {
  Every,
  IsBetween,
  IsSubType,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";
import { Eq } from "ts-arithmetic";

export type IsSeconds<Value extends string> = Every<
  [
    IsSubType<Value, Pattern<number, ":", "Z" | "." | "+" | "-" | "">>,
    IsBetween<ParseInt<Value>, 0, 59>,
    Eq<Length<ParseInt<Value>>, 2>
  ]
>;
