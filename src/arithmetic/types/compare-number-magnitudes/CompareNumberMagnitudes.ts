import { CompareMagnitudes, NumberPair, SplitAndNormalise } from "..";

export type CompareNumberMagnitudes<
  Left extends number,
  Right extends number
> = SplitAndNormalise<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  number
]
  ? CompareMagnitudes<NormalisedLeft, NormalisedRight>
  : never;
