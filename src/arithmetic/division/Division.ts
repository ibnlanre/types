import { Fn } from "@ibnlanre/types";
import { Divide } from "ts-arithmetic";

export type Division<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Tail extends number
]
  ? Rest extends []
    ? Tail
    : Divide<Division<Rest>, Tail>
  : 1;

export interface TDivision<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Division<this[0]>;
}
