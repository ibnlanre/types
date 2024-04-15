import { ComparisonResult } from "../comparison-result";

export type Branch<
  Comparison extends ComparisonResult,
  Positive extends unknown = never,
  Zero extends unknown = never,
  Negative extends unknown = never
> = Comparison extends 1 ? Positive : Comparison extends 0 ? Zero : Negative;
