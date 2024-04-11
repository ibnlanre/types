import { CompareMagnitudes, Normalise, NumberPair, UnsignedFloat } from "..";

export type CompareFloatMagnitudes<
  Left extends UnsignedFloat,
  Right extends UnsignedFloat
> = Normalise<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  number
]
  ? CompareMagnitudes<NormalisedLeft, NormalisedRight>
  : never;
