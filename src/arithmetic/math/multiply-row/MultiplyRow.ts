import { Digit } from "@ibnlanre/types";

import { AddDigitsOperation } from "../add-digits-operation";
import { HeadDigitArray } from "../head-digit-array";
import { MultiplyDigitsOperation } from "../multiply-digits-operation";
import { OperationResult } from "../operation-result";

export type MultiplyRow<
  TableRow extends Digit[],
  Multiplier extends Digit,
  CarryIn extends Digit = 0,
  FinalResult extends Digit[] = []
> = TableRow extends HeadDigitArray<infer RowHead, infer LastDigit>
  ? MultiplyDigitsOperation<LastDigit, Multiplier> extends OperationResult<
      infer ResultingCarryOut,
      infer MultiplicationResult
    >
    ? AddDigitsOperation<MultiplicationResult, CarryIn> extends OperationResult<
        infer MultiplierCarryOut,
        infer TResult
      >
      ? AddDigitsOperation<
          ResultingCarryOut,
          MultiplierCarryOut
        > extends OperationResult<0, infer FinalCarryOut>
        ? MultiplyRow<
            RowHead,
            Multiplier,
            FinalCarryOut,
            [TResult, ...FinalResult]
          >
        : never
      : never
    : never
  : CarryIn extends 0
  ? FinalResult
  : [CarryIn, ...FinalResult];
