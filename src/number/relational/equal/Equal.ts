import { Fn, Math } from "@ibnlanre/types";

export type Equal<Left extends number, Right extends number> = Math.Equal<
  Left,
  Right
>;

export interface TEqual<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Equal<this[1], this[0]>;
}
