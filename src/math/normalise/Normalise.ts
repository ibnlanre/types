import { Concat, Pop, Shift, Size } from "@ibnlanre/types";

import { NormaliseFractionalParts } from "../normalise-fractional-parts";
import { NormaliseIntegerParts } from "../normalise-integer-parts";
import { NumberPair } from "../number-pair";
import { UnsignedFloat } from "../unsigned-float";

export type Normalise<
  Left extends UnsignedFloat,
  Right extends UnsignedFloat
> = NormaliseIntegerParts<Shift<Left>, Shift<Right>> extends NumberPair<
  infer LeftIntegerPart,
  infer RightIntegerPart
>
  ? NormaliseFractionalParts<Pop<Left>, Pop<Right>> extends NumberPair<
      infer LeftFractionalPart,
      infer RightFractionalPart
    >
    ? [
        normalised_left: Concat<LeftIntegerPart, LeftFractionalPart>,
        normalised_right: Concat<RightIntegerPart, RightFractionalPart>,
        decimal_places: Size<RightFractionalPart>
      ]
    : never
  : never;
