import { Digit } from "@ibnlanre/types";

import { AddUnsignedIntegers } from "../add-unsigned-integers";
import { HeadDigitArray } from "../head-digit-array";
import { MultiplyRow } from "../multiply-row";
import { NormaliseIntegerZeros } from "../normalise-integer-zeros";

export type CrossMultiply<
  Left extends Digit[],
  Right extends Digit[],
  Shift extends 0[] = [],
  PreviousRowResult extends Digit[] = []
> = Right extends HeadDigitArray<infer RightHead, infer RightLastDigit>
  ? CrossMultiply<
      Left,
      RightHead,
      [...Shift, 0],
      NormaliseIntegerZeros<
        AddUnsignedIntegers<
          PreviousRowResult,
          [...MultiplyRow<Left, RightLastDigit>, ...Shift]
        >
      >
    >
  : NormaliseIntegerZeros<PreviousRowResult>;
