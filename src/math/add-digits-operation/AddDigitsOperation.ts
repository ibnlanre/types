import { Digit } from "@ibnlanre/types";

import { AddCarryDigit } from "../add-carry-digit";
import { AddDigit } from "../add-digit/AddDigit";
import { OperationResult } from "../operation-result";

export type AddDigitsOperation<
  Left extends Digit,
  Right extends Digit
> = OperationResult<AddCarryDigit<Left, Right>, AddDigit<Left, Right>>;
