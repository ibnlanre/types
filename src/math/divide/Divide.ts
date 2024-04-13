import { SomeExtendType } from "@ibnlanre/types";
import { DivideNumbers } from "../divide-numbers";
import { Negate } from "../negate";

export type Divide<
  Numerator extends number,
  Divisor extends number
> = SomeExtendType<[Numerator, Divisor], never> extends 1
  ? never
  : Divisor extends 0
  ? never
  : Numerator extends 0
  ? 0
  : Divisor extends 1
  ? Numerator
  : number extends Numerator | Divisor
  ? number
  : Divisor extends -1
  ? Negate<Numerator>
  : DivideNumbers<Numerator, Divisor>;
