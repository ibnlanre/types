import type { Digit, Size } from "@ibnlanre/types";

import type { CompareLengths } from "../compare-lengths";
import type { NumberPair } from "../number-pair";
import type { Pad } from "../pad";
import type { PadDirection } from "../pad-direction";

export type NormaliseLengths<
  Left extends Digit[],
  Right extends Digit[],
  Direction extends PadDirection = PadDirection,
  Value extends Digit = 0
> = CompareLengths<Left, Right> extends 0 | -1
  ? NumberPair<Pad<Left, Size<Right>, Direction, Value>, Right>
  : NumberPair<Left, Pad<Right, Size<Left>, Direction, Value>>;
