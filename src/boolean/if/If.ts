import { Bit, Fn } from "@ibnlanre/types";

export type If<
  Condition extends Bit,
  Positive extends unknown = never,
  Zero extends unknown = never
> = Condition extends 1 ? Positive : Zero;

export interface TIf<
  Positive extends unknown | void = never,
  Zero extends unknown | void = never,
  Condition extends Bit | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
    2: Bit;
  }> {
  slot: [Positive, Zero, Condition];
  data: If<this[2], this[0], this[1]>;
}
