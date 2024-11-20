import type { Fn, Math } from "@ibnlanre/types";

export type Addition<Numbers extends number[]> = Math.Addition<Numbers>;

export interface TAddition<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Addition<this[0]>;
}
