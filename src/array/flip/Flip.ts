import type { Fn } from "@ibnlanre/types";

export type Flip<Pair extends [unknown, unknown]> = [Pair[1], Pair[0]];

export interface TFlip<Pair extends [unknown, unknown] | void = void>
  extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Pair];
  data: Flip<this[0]>;
}
