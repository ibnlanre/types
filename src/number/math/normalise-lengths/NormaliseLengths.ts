import { Digit, Size } from "@ibnlanre/types";

import { CompareLengths } from "../compare-lengths";
import { NumberPair } from "../number-pair";
import { PadDirection, Pad } from "../pad";

export type NormaliseLengths<
  Left extends Digit[],
  Right extends Digit[],
  Direction extends PadDirection = PadDirection,
  Value extends Digit = 0
> = CompareLengths<Left, Right> extends 0 | -1
  ? NumberPair<Pad<Left, Size<Right>, Direction, Value>, Right>
  : NumberPair<Left, Pad<Right, Size<Left>, Direction, Value>>;
