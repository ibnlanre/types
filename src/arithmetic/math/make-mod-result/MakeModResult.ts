import { Digit } from "@ibnlanre/types";

import { ModResult } from "../mod-result";
import { NormaliseIntegerZeros } from "../normalise-integer-zeros";

export type MakeModResult<
  Remainder extends Digit[],
  Quotient extends Digit[]
> = ModResult<
  NormaliseIntegerZeros<Remainder>,
  NormaliseIntegerZeros<Quotient>
>;
