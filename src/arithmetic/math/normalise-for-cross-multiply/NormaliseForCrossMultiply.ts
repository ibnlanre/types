import { Concat, Size } from "@ibnlanre/types";

import { AddNumbers } from "../add-numbers";
import { NormaliseIntegerZeros } from "../normalise-integer-zeros";
import { UnsignedFloat } from "../unsigned-float";

export type NormaliseForCrossMultiply<
  Left extends UnsignedFloat,
  Right extends UnsignedFloat
> = Left extends UnsignedFloat<infer LeftIntegerPart, infer LeftFractionalPart>
  ? Right extends UnsignedFloat<
      infer RightIntegerPart,
      infer RightFractionalPart
    >
    ? [
        xDigits: NormaliseIntegerZeros<
          Concat<LeftIntegerPart, LeftFractionalPart>
        >,
        yDigits: NormaliseIntegerZeros<
          Concat<RightIntegerPart, RightFractionalPart>
        >,
        decimalPlaces: AddNumbers<
          Size<LeftFractionalPart>,
          Size<RightFractionalPart>
        >
      ]
    : never
  : never;
