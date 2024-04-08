import { Digit, Math } from "@ibnlanre/types";

export type TableShift<
  Table extends Digit[][],
  Addendum extends Digit = never
> = Table extends [infer Head extends Digit[], ...infer Tail extends Digit[][]]
  ? [Math.RowShift<Head, Addendum>, ...TableShift<Tail, Addendum>]
  : [];
