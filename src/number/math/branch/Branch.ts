import { ComparisonResult } from "../comparison-result";

export type Branch<
  Comparison extends ComparisonResult,
  Positive extends unknown = unknown,
  ZeroOrNegative extends unknown = unknown
> = Comparison extends 1 ? Positive : ZeroOrNegative;
