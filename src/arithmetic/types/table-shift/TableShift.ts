import { Digit } from "@ibnlanre/types";
import { RowShift } from "..";

export type TableShift<
  Table extends Digit[][],
  Addendum extends Digit = never
> = Table extends [infer Head extends Digit[], ...infer Tail extends Digit[][]]
  ? [RowShift<Head, Addendum>, ...TableShift<Tail, Addendum>]
  : [];
