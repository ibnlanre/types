import { Fn, Math } from "@ibnlanre/types";

export type GtOrEq<
  Left extends number,
  Right extends number
> = Math.GreaterThanOrEqualTo<Left, Right>;

export interface TGtOrEq<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: GtOrEq<this[1], this[0]>;
}
