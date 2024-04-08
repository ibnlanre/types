import { Fn } from "@ibnlanre/types";
import { Subtract } from "ts-arithmetic";

export type Subtraction<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Last extends number
]
  ? Rest extends []
    ? Last
    : Subtract<Subtraction<Rest>, Last>
  : 1;

export interface TSubtraction<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Subtraction<this[0]>;
}
