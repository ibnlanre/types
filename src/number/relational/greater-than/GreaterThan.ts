import { Fn, Math } from "@ibnlanre/types";

export type GreaterThan<
  Left extends number,
  Right extends number
> = Math.GreaterThan<Left, Right>;

export interface TGreaterThan<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: GreaterThan<this[1], this[0]>;
}
