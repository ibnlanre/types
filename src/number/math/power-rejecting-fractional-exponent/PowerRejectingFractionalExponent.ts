import type { Exponentiate } from "../exponentiate";
import type { IsInteger } from "../is-integer";

export type PowerRejectingFractionalExponent<
  Base extends number,
  Exponent extends number
> = IsInteger<Exponent> extends 0 ? never : Exponentiate<Base, Exponent>;
