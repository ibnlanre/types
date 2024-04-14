import { Fn, Math } from "@ibnlanre/types";

export type Minimum<Numbers extends number[]> = Math.Minimum<Numbers>;

export interface TMinimum<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Minimum<this[0]>;
}
