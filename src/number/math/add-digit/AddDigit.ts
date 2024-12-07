import type { Bit, Digit } from "@ibnlanre/types";
import type { AddDigitTable } from "../add-digit-table";

export type AddDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = AddDigitTable[Carry][Left][Right];
