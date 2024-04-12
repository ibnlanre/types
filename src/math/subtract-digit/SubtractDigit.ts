import { Bit, Digit } from "@ibnlanre/types";
import { SubtractDigitTable } from "../subtract-digit-table";

export type SubtractDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = SubtractDigitTable[Carry][Left][Right];
