import { Bit, Digit } from "@ibnlanre/types";
import { AddCarryDigitTable } from "../add-carry-digit-table";

export type AddCarryDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = AddCarryDigitTable[Carry][Left][Right];
