import type { Bit, Digit } from "@ibnlanre/types";
import type { SubtractCarryDigitTable } from "../subtract-carry-digit-table";

export type SubtractCarryDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = SubtractCarryDigitTable[Carry][Left][Right];
