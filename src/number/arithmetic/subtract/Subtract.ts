import type { Fn, Math } from "@ibnlanre/types";

export type Subtract<Left extends number, Right extends number> = Math.Subtract<
  Left,
  Right
>;

export interface TSubtract<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Subtract<this[1], this[0]>;
}
