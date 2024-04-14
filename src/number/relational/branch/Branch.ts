import { Fn, Math } from "@ibnlanre/types";

export type Branch<
  Comparison extends Math.ComparisonResult,
  Positive extends number,
  Negative extends number
> = Math.Branch<Comparison, Positive, Negative>;

export interface TBranch<
  Positive extends number | void = void,
  Negative extends number | void = void,
  Comparison extends number | void = void
> extends Fn<{
    0: number;
    1: number;
    2: number;
  }> {
  slot: [Positive, Negative, Comparison];
  data: Branch<this[2], this[0], this[1]>;
}
