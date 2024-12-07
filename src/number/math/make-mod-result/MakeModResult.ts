import type { Digit } from "@ibnlanre/types";

import type { ModResult } from "../mod-result";
import type { NormaliseIntegerZeros } from "../normalise-integer-zeros";

export type MakeModResult<
  Remainder extends Digit[],
  Quotient extends Digit[]
> = ModResult<
  NormaliseIntegerZeros<Remainder>,
  NormaliseIntegerZeros<Quotient>
>;
