import type { DecimalComponents } from "../decimal-components";
import type { Exponentiate } from "../exponentiate";
import type { Root } from "../root";
import type { Simplify } from "../simplify";

export type FractionalExponent<
  Base extends number,
  Exponent extends number
> = Simplify<Exponent> extends DecimalComponents<
  infer Numerator,
  infer Denominator
>
  ? Root<Exponentiate<Base, Numerator>, Denominator>
  : never;
