import type { Bit, Template } from "@ibnlanre/types";

export type IsInteger<Operand extends number> = number extends Operand
  ? Bit
  : Operand extends Operand
  ? Template<Operand> extends `${string}.${string}`
    ? 0
    : 1
  : never;
