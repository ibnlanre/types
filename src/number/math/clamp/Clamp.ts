import type { Branch } from "../branch";
import type { Compare } from "../compare";

export type Clamp<
  Value extends number,
  LowerBound extends number,
  UpperBound extends number
> = Branch<
  Compare<LowerBound, Value>,
  LowerBound,
  Branch<Compare<Value, UpperBound>, UpperBound, Value>
>;
