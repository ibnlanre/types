import { Digit } from "@ibnlanre/types";

export type OperationResult<
  Carry extends Digit = Digit,
  Result extends Digit = Digit
> = [carry: Carry, result: Result];
