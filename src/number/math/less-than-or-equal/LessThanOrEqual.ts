import type { GreaterThanOrEqual } from "../greater-than-or-equal";

export type LessThanOrEqual<
  Left extends number,
  Right extends number
> = GreaterThanOrEqual<Right, Left>;
