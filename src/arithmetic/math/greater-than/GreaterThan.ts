import { Compare } from "../compare";

export type GreaterThan<Left extends number, Right extends number> = Compare<
  Left,
  Right
> extends -1
  ? 0
  : Compare<Left, Right> extends 0
  ? 0
  : 1;
