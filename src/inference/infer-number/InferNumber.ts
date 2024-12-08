import type { Fn } from "@ibnlanre/types";

export type InferNumber<Value extends number> = number extends Value
  ? number
  : Value extends number
  ? Value
  : never;

export interface TInferNumber<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: InferNumber<this[0]>;
}
