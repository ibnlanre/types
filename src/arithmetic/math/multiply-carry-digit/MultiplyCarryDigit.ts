import { Digit } from "@ibnlanre/types";
import { MultiplyCarryDigitTable } from "../multiply-digit-carry-table";

export type MultiplyCarryDigit<
  Left extends Digit,
  Right extends Digit
> = MultiplyCarryDigitTable[Left][Right];
