import type { Bit, Digit } from "@ibnlanre/types";
import type { SubtractDigitTable } from "../subtract-digit-table";

export type SubtractDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = SubtractDigitTable[Carry][Left][Right];
