import type { Fn, Math } from "@ibnlanre/types";

export type SquareRoot<Number extends number> = Math.SquareRoot<Number>;

export interface TSquareRoot<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: SquareRoot<this[0]>;
}
