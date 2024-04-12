import { Fn, Math } from "@ibnlanre/types";

export type Division<Numbers extends number[]> = Math.Division<Numbers>;

export interface TDivision<Numbers extends number[] | void = void>
  extends Fn<{
    0: number[];
  }> {
  slot: [Numbers];
  data: Division<this[0]>;
}
