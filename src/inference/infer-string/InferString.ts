import type { Fn } from "@ibnlanre/types";

export type InferString<Value extends string> = string extends Value
  ? string
  : Value extends string
  ? Value
  : never;

export interface TInferString<Value extends string | void = void>
  extends Fn<{
    0: string;
  }> {
  slot: [Value];
  data: InferString<this[0]>;
}
