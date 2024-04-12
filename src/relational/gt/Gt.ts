import { Fn, Math } from "@ibnlanre/types";

export type Gt<Left extends number, Right extends number> = Math.GreaterThan<
  Left,
  Right
>;

export interface TGt<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Gt<this[1], this[0]>;
}
