import { Fn } from "@ibnlanre/types";

export type IsZero<Value extends number> = Value extends 0 ? 1 : 0;

export interface TIsZero<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsZero<this[0]>;
}
