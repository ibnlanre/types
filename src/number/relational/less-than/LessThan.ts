import { Fn, Math } from "@ibnlanre/types";

export type LessThan<Left extends number, Right extends number> = Math.LessThan<
  Left,
  Right
>;

export interface TLessThan<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: LessThan<this[1], this[0]>;
}
