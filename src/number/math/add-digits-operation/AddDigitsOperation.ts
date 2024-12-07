import type { Digit } from "@ibnlanre/types";

import type { AddCarryDigit } from "../add-carry-digit";
import type { AddDigit } from "../add-digit/AddDigit";
import type { OperationResult } from "../operation-result";

export type AddDigitsOperation<
  Left extends Digit,
  Right extends Digit
> = OperationResult<AddCarryDigit<Left, Right>, AddDigit<Left, Right>>;
