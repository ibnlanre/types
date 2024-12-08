import type { InferNumber } from "@ibnlanre/types";

import type { Divide } from "../divide";
import type { IsEven } from "../is-even";
import type { IsNegative } from "../is-negative";
import type { Multiply } from "../multiply";
import type { Negate } from "../negate";
import type { Subtract } from "../subtract";

type NegativeExponentHelper<
  Base extends number,
  Exponent extends number,
  NegativeExponent extends number = Negate<Exponent>
> = Exponentiate<Base, NegativeExponent> extends InferNumber<infer Result>
  ? Divide<1, Result>
  : never;

type ExponentiateHelper<
  Base extends number,
  Exponent extends number,
  Positive extends number = Multiply<Base, Base>,
  Even extends number = Divide<Exponent, 2>,
  Odd extends number = Divide<Subtract<Exponent, 1>, 2>
> = Exponent extends 0
  ? 1
  : IsNegative<Exponent> extends 1
  ? NegativeExponentHelper<Base, Exponent>
  : IsEven<Exponent> extends 1
  ? Exponentiate<Positive, Even>
  : Exponentiate<Positive, Odd> extends InferNumber<infer Result>
  ? Multiply<Base, Result>
  : never;

export type Exponentiate<
  Base extends number,
  Exponent extends number
> = ExponentiateHelper<Base, Exponent>;
