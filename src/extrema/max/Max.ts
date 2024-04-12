import { Fn, Math } from "@ibnlanre/types";

export type Max<Left extends number, Right extends number> = Math.Bigger<
  Left,
  Right
>;

export interface TMax<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Max<this[1], this[0]>;
}
