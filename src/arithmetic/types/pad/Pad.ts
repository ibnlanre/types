import { Digit } from "@ibnlanre/types";

import { PadEnd } from "../pad-end";
import { PadStart } from "../pad-start";

export type PadDirection = "L" | "R";

export type Pad<
  List extends Digit[],
  Length extends number,
  Direction extends PadDirection = PadDirection,
  Value extends Digit = 0
> = {
  L: PadStart<List, Length, Value>;
  R: PadEnd<List, Length, Value>;
}[Direction];
