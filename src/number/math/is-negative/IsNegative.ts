import type { Bit, Sign } from "@ibnlanre/types";

export type IsNegative<Number extends number> = number extends Number
  ? Bit
  : Number extends Number
  ? Sign<Number> extends -1
    ? 1
    : 0
  : never;
