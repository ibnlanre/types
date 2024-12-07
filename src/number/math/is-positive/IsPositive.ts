import type { Bit, Sign } from "@ibnlanre/types";

export type IsPositive<Input extends number> = number extends Input
  ? Bit
  : Input extends Input
  ? Sign<Input> extends 1
    ? 1
    : 0
  : never;
