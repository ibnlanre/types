import { SomeExtendType } from "@ibnlanre/types";
import { IsNegative } from "../is-negative";
import { PowerRejectingFractionalExponent } from "../power-rejecting-fractional-exponent";

export type Power<
  Base extends number,
  Exponent extends number
> = SomeExtendType<[Base, Exponent], never> extends 1
  ? never
  : Exponent extends 0
  ? 1
  : Exponent extends 1
  ? Base
  : Base extends 1
  ? 1
  : Base extends -1
  ? number extends Exponent
    ? -1 | 1
    : PowerRejectingFractionalExponent<Base, Exponent>
  : Base extends 0
  ? IsNegative<Exponent> extends 1
    ? never
    : 0
  : number extends Base | Exponent
  ? number
  : PowerRejectingFractionalExponent<Base, Exponent>;
