import { Digit } from "@ibnlanre/types";

import { PadDirection } from "../pad-direction";
import { PadEnd } from "../pad-end";
import { PadStart } from "../pad-start";

export type Pad<
  List extends Digit[],
  Length extends number,
  Direction extends PadDirection = PadDirection,
  Value extends Digit = 0
> = {
  L: PadStart<List, Length, Value>;
  R: PadEnd<List, Length, Value>;
}[Direction];
