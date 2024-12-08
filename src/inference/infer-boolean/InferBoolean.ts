import type { Fn } from "@ibnlanre/types";

export type InferBoolean<Value extends boolean> = boolean extends Value
  ? boolean
  : Value extends boolean
  ? Value
  : never;

export interface TInferBoolean<Value extends boolean | void = void>
  extends Fn<{
    0: boolean;
  }> {
  slot: [Value];
  data: InferBoolean<this[0]>;
}
