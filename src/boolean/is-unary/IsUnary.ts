import { Fn } from "@ibnlanre/types";

export type IsUnary<Number extends number> = Number extends 1 ? 1 : 0;

export interface TIsUnary<Number extends number | void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: IsUnary<this[0]>;
}
