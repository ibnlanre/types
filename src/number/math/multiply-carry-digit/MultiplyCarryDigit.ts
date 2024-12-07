import type { Digit } from "@ibnlanre/types";
import type { MultiplyCarryDigitTable } from "../multiply-carry-digit-table";

export type MultiplyCarryDigit<
  Left extends Digit,
  Right extends Digit
> = MultiplyCarryDigitTable[Left][Right];
