import { Bit, Sign } from "@ibnlanre/types";

export type IsPositive<T extends number> = number extends T
  ? Bit
  : T extends T
  ? Sign<T> extends 1
    ? 1
    : 0
  : never;
