import { Fn } from "@ibnlanre/types";
import { Add } from "ts-arithmetic";

export type Addition<Numbers extends number[]> = Numbers extends [
  infer First extends number,
  ...infer Rest extends number[]
]
  ? Add<First, Addition<Rest>>
  : 0;

export interface TAddition<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Addition<this[0]>;
}
