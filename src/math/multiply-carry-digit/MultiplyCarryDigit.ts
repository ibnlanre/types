import { Digit } from "@ibnlanre/types";
import { MultiplyCarryDigitTable } from "../multiply-carry-digit-table";

export type MultiplyCarryDigit<
  Left extends Digit,
  Right extends Digit
> = MultiplyCarryDigitTable[Left][Right];
