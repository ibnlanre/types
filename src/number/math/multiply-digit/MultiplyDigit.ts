import type { Digit } from "@ibnlanre/types";
import type { MultiplyDigitTable } from "../multiply-digit-table";

export type MultiplyDigit<
  Left extends Digit,
  Right extends Digit
> = MultiplyDigitTable[Left][Right];
