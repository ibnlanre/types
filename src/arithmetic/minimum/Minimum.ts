import { Fn } from "@ibnlanre/types";
import { Min } from "ts-arithmetic";

export type Minimum<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Tail extends number
]
  ? Rest extends []
    ? Tail
    : Min<Minimum<Rest>, Tail>
  : 0;

export interface TMinimum<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Minimum<this[0]>;
}
