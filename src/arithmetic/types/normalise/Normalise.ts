import { Pop, Shift, Size } from "@ibnlanre/types";
import {
  NormaliseFractionalParts,
  NormaliseIntegerParts,
  NumberPair,
  UnsignedFloat,
} from "..";

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
        normalised_left: [...LeftIntegerPart, ...LeftFractionalPart],
        normalised_right: [...RightIntegerPart, ...RightFractionalPart],
        decimal_places: Size<RightFractionalPart>
      ]
    : never
  : never;
