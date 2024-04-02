import { Fn } from "@ibnlanre/types";
import { GtOrEq, LtOrEq } from "ts-arithmetic";

export type Bound<
  Value extends number,
  LowerBound extends number,
  UpperBound extends number
> = GtOrEq<Value, UpperBound> extends 1
  ? UpperBound
  : LtOrEq<Value, LowerBound> extends 1
  ? LowerBound
  : Value;

export interface TBound<
  LowerBound extends number | void = void,
  UpperBound extends number | void = void,
  Value extends number | void = void
> extends Fn<{
    0: number;
    1: number;
    2: number;
  }> {
  slot: [LowerBound, UpperBound, Value];
  data: Bound<this[2], this[0], this[1]>;
}
