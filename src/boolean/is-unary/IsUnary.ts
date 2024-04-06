import { Fn } from "@ibnlanre/types";

export type IsUnary<Value extends number> = Value extends 1 ? 1 : 0;

export interface TIsUnary<Value extends number | void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsUnary<this[0]>;
}
