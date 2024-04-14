import { Digit } from "@ibnlanre/types";

export type RowShift<
  TableRow extends Digit[],
  Addendum extends Digit = never
> = TableRow extends [infer Head extends Digit, ...infer Rest extends Digit[]]
  ? [...Rest, [Addendum] extends [never] ? Head : Addendum]
  : never;
