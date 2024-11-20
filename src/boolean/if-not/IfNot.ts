import type { Fn, Math } from "@ibnlanre/types";

export type IfNot<
  Condition extends Math.ComparisonResult,
  Positive extends unknown = never,
  Zero extends unknown = never
> = Condition extends 0 ? Positive : Zero;

export interface TIfNot<
  Positive extends unknown | void = never,
  Zero extends unknown | void = never,
  Condition extends Math.ComparisonResult | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
    2: unknown;
  }> {
  slot: [Positive, Zero, Condition];
  data: IfNot<this[2], this[0], this[1]>;
}
