import type { Fn, Math } from "@ibnlanre/types";

export type Multiplication<Numbers extends number[]> =
  Math.Multiplication<Numbers>;

export interface TMultiplication<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Multiplication<this[0]>;
}
