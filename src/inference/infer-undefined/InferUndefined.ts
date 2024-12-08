import type { Fn } from "@ibnlanre/types";

export type InferUndefined<Value extends undefined> = undefined extends Value
  ? undefined
  : Value extends undefined
  ? Value
  : never;

export interface TInferUndefined<Value extends undefined | void = void>
  extends Fn<{
    0: undefined;
  }> {
  slot: [Value];
  data: InferUndefined<this[0]>;
}
