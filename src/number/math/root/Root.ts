import type { And, Length } from "@ibnlanre/types";

import type { Absolute } from "../absolute";
import type { Add } from "../add";
import type { Divide } from "../divide";
import type { GreaterThan } from "../greater-than";
import type { LessThan } from "../less-than";
import type { Join } from "../join";
import type { MakeSignedNumber } from "../make-signed-number";
import type { Minimum } from "../minimum";
import type { Multiply } from "../multiply";
import type { Power } from "../power";
import type { Subtract } from "../subtract";
import type { SmallEnoughForScientificNotation } from "../small-enough-for-scientific-notation";
import type { ToUnsignedFloat } from "../to-unsigned-float";
import type { UnsignedFloat } from "../unsigned-float";
import type { Exponentiate } from "../exponentiate";

type BestGuess<Number extends number, Raise extends number> = Minimum<
  [Exponentiate<Length<Number>, 2>, Multiply<Number, Raise>]
>;

type RootEstimate<
  Number extends number,
  Raise extends number,
  Guess extends number
> = Divide<
  Add<
    Multiply<Guess, Subtract<Raise, 1>>,
    Divide<Number, Power<Guess, Subtract<Raise, 1>>>
  >,
  Raise
>;

type RootDifference<Estimate extends number, Guess extends number> = Absolute<
  Subtract<Estimate, Guess>
>;

type MaxRootIteration = 25;

type RootHelper<
  Number extends number,
  Raise extends number,
  Iteration extends number = 0,
  Guess extends number = BestGuess<Number, Raise>,
  Quotient extends number = RootEstimate<Number, Raise, Guess>,
  Delta extends number = RootDifference<Quotient, Guess>
> = ToUnsignedFloat<Guess> extends UnsignedFloat<
  infer LeftIntegerPart,
  infer RightFractionalPart
>
  ? SmallEnoughForScientificNotation<RightFractionalPart> extends 1
    ? RootHelper<Number, Raise, 0, MakeSignedNumber<Join<LeftIntegerPart>, "+">>
    : And<
        GreaterThan<Delta, 0>,
        LessThan<Iteration, MaxRootIteration>
      > extends 1
    ? RootHelper<Number, Raise, Add<Iteration, 1>, Quotient>
    : Quotient
  : never;

export type Root<Number extends number, Raise extends number> = RootHelper<
  Number,
  Raise
>;
