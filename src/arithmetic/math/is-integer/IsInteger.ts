import { Bit, Template } from "@ibnlanre/types";

export type IsInteger<N extends number> = number extends N
  ? Bit
  : N extends N
  ? Template<N> extends `${string}.${string}`
    ? 0
    : 1
  : never;
