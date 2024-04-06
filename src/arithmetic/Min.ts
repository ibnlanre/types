import { Fn } from "@ibnlanre/types";
import { Min } from "ts-arithmetic";

export type MinN<X extends number[], M extends number = X[0]> = X extends [
  infer H extends number,
  ...infer R extends number[]
]
  ? MinN<R, Min<H, M>>
  : M;

export interface TMin<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Min<this[1], this[0]>;
}
