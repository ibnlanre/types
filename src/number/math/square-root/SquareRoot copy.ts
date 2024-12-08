import type { InferNumber } from "@ibnlanre/types";

import type { Absolute } from "../absolute";
import type { Add } from "../add";
import type { Divide } from "../divide";
import type { GreaterThan } from "../greater-than";
import type { Multiply } from "../multiply";
import type { Power } from "../power";
import type { Round } from "../round";
import type { RoundFloat } from "../round-float";
import type { RoundFractionalDigits } from "../round-fractional-digits";
import type { Subtract } from "../subtract";
import type { ToFixed } from "../to-fixed";

type Estimate<Value extends number, Guess extends number> = Divide<
  Add<Guess, Divide<Value, Guess>>,
  2
>;

type Difference<Estimate extends number, Guess extends number> = Absolute<
  Subtract<Estimate, Guess>
>;

type SquareRootHelper<
  Value extends number,
  Tolerance extends number,
  Guess extends number = Divide<Value, 2>,
  Quotient extends number = Estimate<Value, Guess>,
  Delta extends number = Difference<Quotient, Guess>
> = GreaterThan<Delta, Tolerance> extends 1
  ? SquareRootHelper<Value, Tolerance, Quotient>
  : Quotient;

/**
 * `SquareRoot` takes a number and returns the square root of that number.
 *
 * @description
 * This algorithm is based on the Heron's method for finding the square root of a number.
 * Also known as the Babylonian method, it is an ancient algorithm that is still used today.
 *
 * The default tolerance is 0.00000001.
 *
 * @param Number A number to find the square root of.
 * @param [Tolerance] The tolerance is the maximum difference between the estimate and the guess.
 * @returns The square root of the number.
 *
 * @example
 * type Result = SquareRoot<16>;
 * //   ^? type Result = 4
 *
 * @since 0.1.0
 */
export type SquareRoot<
  Number extends number,
  Tolerance extends number = 0.00000001
> = SquareRootHelper<Number, Tolerance>;

// newton's method: (x * (n-1)/n) + (A/n * (1/x^n-1))
// x = guess
// n = power
// A = number

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

type RootHelper<
  Number extends number,
  Raise extends number,
  Tolerance extends number = 1,
  Guess extends number = Divide<Raise, 2>,
  Quotient extends number = RootEstimate<Number, Raise, Guess>,
  Delta extends number = RootDifference<Quotient, Guess>
> = GreaterThan<Delta, Tolerance> extends 1
  ? RootHelper<Number, Raise, Tolerance, Quotient>
  : Quotient;

export type Root<Number extends number, Raise extends number> = RootHelper<
  Number,
  Raise
> extends InferNumber<infer Result>
  ? ToFixed<Result, 3>
  : never;

type Test = Root<16, 3>;
//   ^? type Test = 2
