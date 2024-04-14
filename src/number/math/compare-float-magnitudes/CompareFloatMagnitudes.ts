import { CompareMagnitudes } from "../compare-magnitudes";
import { Normalise } from "../normalise";
import { NumberPair } from "../number-pair";
import { UnsignedFloat } from "../unsigned-float";

export type CompareFloatMagnitudes<
  Left extends UnsignedFloat,
  Right extends UnsignedFloat
> = Normalise<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  number
]
  ? CompareMagnitudes<NormalisedLeft, NormalisedRight>
  : never;
