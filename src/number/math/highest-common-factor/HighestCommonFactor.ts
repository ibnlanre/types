import type { GreaterThan } from "../greater-than";
import type { Subtract } from "../subtract";

export type HighestCommonFactor<
  A extends number,
  B extends number
> = A extends B
  ? A
  : A extends 0
  ? B
  : B extends 0
  ? A
  : GreaterThan<A, B> extends 1
  ? HighestCommonFactor<Subtract<A, B>, B>
  : HighestCommonFactor<A, Subtract<B, A>>;
