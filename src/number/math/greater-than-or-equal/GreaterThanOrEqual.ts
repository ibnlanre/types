import { Compare } from "../compare";

export type GreaterThanOrEqual<
  Left extends number,
  Right extends number
> = Compare<Left, Right> extends -1 ? 0 : 1;
