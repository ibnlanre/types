import type { Fn, Math } from "@ibnlanre/types";

export type Subtraction<Numbers extends number[]> = Math.Subtraction<Numbers>;

export interface TSubtraction<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Subtraction<this[0]>;
}
