import { Fn } from "@ibnlanre/types";
import { Subtract } from "ts-arithmetic";

export type Subtraction<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Tail extends number
]
  ? Rest extends []
    ? Tail
    : Subtract<Subtraction<Rest>, Tail>
  : 1;

export interface TSubtraction<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Subtraction<this[0]>;
}
