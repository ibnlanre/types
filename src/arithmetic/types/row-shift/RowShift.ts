import { Digit } from "@ibnlanre/types";

export type RowShift<
  A extends Digit[],
  Addendum extends Digit = never
> = A extends [infer Head extends Digit, ...infer Rest extends Digit[]]
  ? [...Rest, [Addendum] extends [never] ? Head : Addendum]
  : never;
