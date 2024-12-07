import type { Digit } from "@ibnlanre/types";

import type { AddUnsignedIntegers } from "../add-unsigned-integers";
import type { HeadDigitArray } from "../head-digit-array";
import type { MultiplyRow } from "../multiply-row";
import type { NormaliseIntegerZeros } from "../normalise-integer-zeros";

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
