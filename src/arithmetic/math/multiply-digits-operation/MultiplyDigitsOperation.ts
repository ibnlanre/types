import { Digit } from "@ibnlanre/types";

import { MultiplyCarryDigit } from "../multiply-carry-digit";
import { MultiplyDigit } from "../multiply-digit";
import { OperationResult } from "../operation-result";

export type MultiplyDigitsOperation<
  Left extends Digit,
  Right extends Digit
> = OperationResult<
  MultiplyCarryDigit<Left, Right>,
  MultiplyDigit<Left, Right>
>;
