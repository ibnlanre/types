import type { DivideNumbers } from "../divide-numbers";
import type { Negate } from "../negate";

export type Divide<
  Numerator extends number,
  Divisor extends number
> = Divisor extends 0
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
