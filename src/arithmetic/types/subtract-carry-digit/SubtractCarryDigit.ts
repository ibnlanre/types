import { Bit, Digit } from "@ibnlanre/types";
import { SubtractCarryDigitTable } from "..";

export type SubtractCarryDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = SubtractCarryDigitTable[Carry][Left][Right];
