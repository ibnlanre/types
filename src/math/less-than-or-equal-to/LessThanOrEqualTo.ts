import { GreaterThanOrEqualTo } from "../greater-than-or-equal-to";

export type LessThanOrEqualTo<
  Left extends number,
  Right extends number
> = GreaterThanOrEqualTo<Right, Left>;
