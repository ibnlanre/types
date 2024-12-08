import type { AnyExtend, InferNumber } from "@ibnlanre/types";

import type { Exponentiate } from "../exponentiate";
import type { FractionalExponent } from "../fractional-exponent";
import type { IsNonInteger } from "../is-non-integer";

export type Power<Base extends number, Exponent extends number> = AnyExtend<
  [Base, Exponent],
  never
> extends 1
  ? never
  : Exponent extends 0
  ? 1
  : Exponent extends 1
  ? Base
  : Base extends 1
  ? 1
  : Base extends 0
  ? 0
  : number extends Exponent
  ? -1 | 1
  : number extends Base | Exponent
  ? number
  : IsNonInteger<Exponent> extends 1
  ? FractionalExponent<Base, Exponent> extends InferNumber<infer Result>
    ? Result
    : never
  : Exponentiate<Base, Exponent>;
