import { Bit, Digit } from "@ibnlanre/types";

import { AddUnsignedIntegers } from "../add-unsigned-integers";
import { CompareIntegerMagnitudes } from "../compare-integer-magnitudes";
import { MakeModResult } from "../make-mod-result";
import { SubtractUnsignedIntegers } from "../subtract-unsigned-integers";

type EuclideanDivideHelper<
  Divisor extends Digit[],
  Remainder extends Digit[],
  Quotient extends Digit[]
> = CompareIntegerMagnitudes<Remainder, Divisor> extends Bit
  ? EuclideanDivideHelper<
      Divisor,
      SubtractUnsignedIntegers<Remainder, Divisor>,
      AddUnsignedIntegers<Quotient, [1]>
    >
  : MakeModResult<Remainder, Quotient>;

export type EuclideanDivide<
  TNumerator extends Digit[],
  Divisor extends Digit[]
> = EuclideanDivideHelper<Divisor, TNumerator, [0]>;
