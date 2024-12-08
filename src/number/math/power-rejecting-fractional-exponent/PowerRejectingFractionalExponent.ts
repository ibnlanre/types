import type { InferNumber, SquareRoot } from "@ibnlanre/types";
import type { DecimalComponents } from "../decimal-components";
import type { Exponentiate } from "../exponentiate";
import type { IsInteger } from "../is-integer";
import type { IsNonInteger } from "../is-non-integer";
import type { Simplify } from "../simplify";
import type { Root } from "../square-root/SquareRoot copy";

export type PowerRejectingFractionalExponent<
  Base extends number,
  Exponent extends number
> = IsInteger<Exponent> extends 0 ? never : Exponentiate<Base, Exponent>;

type Test = PowerRejectingFractionalExponent<2, 1.5>;

type FractionalComponent<
  Base extends number,
  Exponent extends number
> = IsNonInteger<Exponent> extends 1
  ? Simplify<Exponent> extends DecimalComponents<
      infer Numerator,
      infer Denominator
    >
    ? Root<Base, Numerator> extends InferNumber<infer RootResult>
      ? [Numerator, RootResult, Denominator] // Exponentiate<RootResult, Numerator>
      : never
    : never
  : never;

type Test2 = FractionalComponent<2, 1.5>;
//    ^?
