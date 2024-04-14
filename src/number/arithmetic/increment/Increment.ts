import { Fn, Math } from "@ibnlanre/types";

export type Increment<Number extends number> = Math.Add<Number, 1>;

export interface TIncrement<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Increment<this[0]>;
}
