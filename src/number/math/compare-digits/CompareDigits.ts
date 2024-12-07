import type { Digit } from "@ibnlanre/types";
import type { CompareDigitTable } from "../compare-digit-table";

export type CompareDigits<
  Left extends Digit,
  Right extends Digit
> = CompareDigitTable[Left][Right];
