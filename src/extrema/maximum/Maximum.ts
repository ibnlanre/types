import { Fn, Math } from "@ibnlanre/types";

export type Maximum<Numbers extends number[]> = Math.Maximum<Numbers>;

export interface TMaximum<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Maximum<this[0]>;
}
