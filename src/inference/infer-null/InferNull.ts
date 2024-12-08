import type { Fn } from "@ibnlanre/types";

export type InferNull<Value extends null> = null extends Value
  ? null
  : Value extends null
  ? Value
  : never;

export interface TInferNull<Value extends null | void = void>
  extends Fn<{
    0: null;
  }> {
  slot: [Value];
  data: InferNull<this[0]>;
}
