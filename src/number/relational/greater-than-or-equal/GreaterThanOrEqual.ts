import { Fn, Math } from "@ibnlanre/types";

export type GreaterThanOrEqual<
  Left extends number,
  Right extends number
> = Math.GreaterThanOrEqual<Left, Right>;

export interface TGreaterThanOrEqual<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: GreaterThanOrEqual<this[1], this[0]>;
}
