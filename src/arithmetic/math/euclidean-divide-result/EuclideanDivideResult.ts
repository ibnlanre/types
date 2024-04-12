import { Digit } from "@ibnlanre/types";
import { ModResult } from "../mod-result";

export type EuclideanDivideResult<
  Remainder extends Digit[],
  Quotient extends Digit
> = ModResult<Remainder, [Quotient]>;
