import { Fn } from "@ibnlanre/types";
import { Multiply } from "ts-arithmetic";

export type Multiplication<Numbers extends number[]> = Numbers extends [
  infer Head extends number,
  ...infer Rest extends number[]
]
  ? Multiply<Head, Multiplication<Rest>>
  : 1;

export interface TMultiplication<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Multiplication<this[0]>;
}
