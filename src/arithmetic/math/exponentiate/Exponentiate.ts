import { Divide } from "../divide";
import { IsEven } from "../is-even";
import { IsNegative } from "../is-negative";
import { Multiply } from "../multiply";
import { Negate } from "../negate";
import { Subtract } from "../subtract";

export type Exponentiate<
  Base extends number,
  Exponent extends number
> = Exponent extends 0
  ? 1
  : IsNegative<Exponent> extends 1
  ? Exponentiate<Divide<1, Base>, Negate<Exponent>>
  : IsEven<Exponent> extends 1
  ? Exponentiate<Multiply<Base, Base>, Divide<Exponent, 2>>
  : Exponentiate<
      Multiply<Base, Base>,
      Divide<Subtract<Exponent, 1>, 2>
    > extends infer Result extends number
  ? Multiply<Base, Result>
  : never;
