import { Fn, Math } from "@ibnlanre/types";

export type Decrement<Number extends number> = Math.Subtract<Number, 1>;

export interface TDecrement<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Decrement<this[0]>;
}
