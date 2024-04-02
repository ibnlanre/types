import { Fn } from "@ibnlanre/types";
import { Divide } from "ts-arithmetic";

export type Division<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Last extends number
]
  ? Rest extends []
    ? Last
    : Divide<Division<Rest>, Last>
  : 1;

export interface TDivision<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Division<this[0]>;
}
