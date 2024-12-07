import type { CompareMagnitudes } from "../compare-magnitudes";
import type { Normalise } from "../normalise";
import type { NumberPair } from "../number-pair";
import type { UnsignedFloat } from "../unsigned-float";

export type CompareFloatMagnitudes<
  Left extends UnsignedFloat,
  Right extends UnsignedFloat
> = Normalise<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  number
]
  ? CompareMagnitudes<NormalisedLeft, NormalisedRight>
  : never;
