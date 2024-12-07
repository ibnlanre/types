import type { CompareMagnitudes } from "../compare-magnitudes";
import type { NumberPair } from "../number-pair";
import type { SplitAndNormalise } from "../split-and-normalise";

export type CompareNumberMagnitudes<
  Left extends number,
  Right extends number
> = SplitAndNormalise<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  number
]
  ? CompareMagnitudes<NormalisedLeft, NormalisedRight>
  : never;
