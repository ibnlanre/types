import type { Fn, Math } from "@ibnlanre/types";

export type LessThanOrEqual<
  Left extends number,
  Right extends number
> = Math.LessThanOrEqual<Left, Right>;

export interface TLessThanOrEqual<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: LessThanOrEqual<this[1], this[0]>;
}
