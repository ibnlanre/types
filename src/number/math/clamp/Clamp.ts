import { Branch } from "../branch";
import { Compare } from "../compare";

export type Clamp<
  Value extends number,
  LowerBound extends number,
  UpperBound extends number
> = Branch<
  Compare<LowerBound, Value>,
  LowerBound,
  Branch<Compare<Value, UpperBound>, UpperBound, Value>
>;
