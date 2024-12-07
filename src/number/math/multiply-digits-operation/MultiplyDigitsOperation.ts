import type { Digit } from "@ibnlanre/types";

import type { MultiplyCarryDigit } from "../multiply-carry-digit";
import type { MultiplyDigit } from "../multiply-digit";
import type { OperationResult } from "../operation-result";

export type MultiplyDigitsOperation<
  Left extends Digit,
  Right extends Digit
> = OperationResult<
  MultiplyCarryDigit<Left, Right>,
  MultiplyDigit<Left, Right>
>;
