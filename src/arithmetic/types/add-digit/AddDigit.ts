import { Bit, Digit } from "@ibnlanre/types";
import { AddDigitTable } from "..";

export type AddDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = AddDigitTable[Carry][Left][Right];
