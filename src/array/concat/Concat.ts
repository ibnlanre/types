import type { Fn } from "@ibnlanre/types";

export type Concat<Left extends unknown[], Right extends unknown[]> = [
  ...Left,
  ...Right
];

export interface TConcat<
  Right extends unknown[] | void = void,
  Left extends unknown[] | void = void
> extends Fn<{
    0: unknown[];
    1: unknown[];
  }> {
  slot: [Right, Left];
  data: Concat<this[1], this[0]>;
}
