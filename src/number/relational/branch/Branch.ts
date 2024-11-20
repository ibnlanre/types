import type { Fn, Math } from "@ibnlanre/types";

export type Branch<
  Comparison extends Math.ComparisonResult,
  Positive extends number,
  Zero extends number,
  Negative extends number
> = Math.Branch<Comparison, Positive, Zero, Negative>;

export interface TBranch<
  Positive extends number | void = never,
  Zero extends number | void = never,
  Negative extends number | void = never,
  Comparison extends Math.ComparisonResult | void = void
> extends Fn<{
    0: number;
    1: number;
    2: number;
    3: Math.ComparisonResult;
  }> {
  slot: [Positive, Zero, Negative, Comparison];
  data: Branch<this[3], this[0], this[1], this[2]>;
}
