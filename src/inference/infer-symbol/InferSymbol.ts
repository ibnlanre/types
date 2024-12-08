import type { Fn } from "@ibnlanre/types";

export type InferSymbol<Value extends symbol> = symbol extends Value
  ? symbol
  : Value extends symbol
  ? Value
  : never;

export interface TInferSymbol<Value extends symbol | void = void>
  extends Fn<{
    0: symbol;
  }> {
  slot: [Value];
  data: InferSymbol<this[0]>;
}
