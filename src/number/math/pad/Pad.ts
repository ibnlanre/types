import type { Digit } from "@ibnlanre/types";

import type { PadDirection } from "../pad-direction";
import type { PadEnd } from "../pad-end";
import type { PadStart } from "../pad-start";

export type Pad<
  List extends Digit[],
  Length extends number,
  Direction extends PadDirection = PadDirection,
  Value extends Digit = 0
> = {
  L: PadStart<List, Length, Value>;
  R: PadEnd<List, Length, Value>;
}[Direction];
