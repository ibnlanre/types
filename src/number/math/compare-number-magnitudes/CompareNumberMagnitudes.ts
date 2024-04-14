import { CompareMagnitudes } from "../compare-magnitudes";
import { NumberPair } from "../number-pair";
import { SplitAndNormalise } from "../split-and-normalise";

export type CompareNumberMagnitudes<
  Left extends number,
  Right extends number
> = SplitAndNormalise<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  number
]
  ? CompareMagnitudes<NormalisedLeft, NormalisedRight>
  : never;
