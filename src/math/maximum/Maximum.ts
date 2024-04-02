import { Fn } from "@ibnlanre/types";
import { Max } from "ts-arithmetic";

export type Maximum<Numbers extends number[]> = Numbers extends [
  infer First extends number,
  ...infer Rest extends number[]
]
  ? Max<First, Maximum<Rest>>
  : 0;

export interface TMaximum<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Maximum<this[0]>;
}
