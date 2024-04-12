import { ComparisonResult } from "../comparison-result";

export type Branch<
  Comparison extends ComparisonResult,
  GreaterThan extends unknown = unknown,
  LessThanOrEqualTo extends unknown = unknown
> = Comparison extends 1 ? GreaterThan : LessThanOrEqualTo;
