import type { Digit } from "@ibnlanre/types";
import type { ModResult } from "../mod-result";

export type EuclideanDivideResult<
  Remainder extends Digit[],
  Quotient extends Digit
> = ModResult<Remainder, [Quotient]>;
