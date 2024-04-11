import { Bit, Digit } from "@ibnlanre/types";
import { SubtractDigitTable } from "..";

export type SubtractDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = SubtractDigitTable[Carry][Left][Right];
