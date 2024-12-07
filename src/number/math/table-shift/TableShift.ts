import type { Digit } from "@ibnlanre/types";
import type { RowShift } from "../row-shift";

export type TableShift<
  Table extends Digit[][],
  Addendum extends Digit = never
> = Table extends [infer Head extends Digit[], ...infer Tail extends Digit[][]]
  ? [RowShift<Head, Addendum>, ...TableShift<Tail, Addendum>]
  : [];
