import { Absolute } from "../absolute";
import { Add } from "../add";
import { Divide } from "../divide";
import { GreaterThan } from "../greater-than";
import { Subtract } from "../subtract";

// The tolerance is the maximum difference between the estimate and the guess.
type Tolerance = 0.00000001;

type Estimate<Value extends number, Guess extends number> = Divide<
  Add<Guess, Divide<Value, Guess>>,
  2
>;

type Difference<Estimate extends number, Guess extends number> = Absolute<
  Subtract<Estimate, Guess>
>;

type SquareRootHelper<
  Value extends number,
  Guess extends number = Divide<Value, 2>,
  Quotient extends number = Estimate<Value, Guess>,
  Delta extends number = Difference<Quotient, Guess>
> = GreaterThan<Delta, Tolerance> extends 1
  ? SquareRootHelper<Value, Quotient>
  : Quotient;

/**
 * `SquareRoot` takes a number and returns the square root of that number.
 *
 * @description
 * This algorithm is based on the Heron's method for finding the square root of a number.
 * Also known as the Babylonian method, it is an ancient algorithm that is still used today.
 *
 * @param Number A number to find the square root of.
 * @returns The square root of the number.
 *
 * @example
 * type Result = SquareRoot<16>;
 * //   ^? type Result = 4
 *
 * @since 0.1.0
 */
export type SquareRoot<Number extends number> = SquareRootHelper<Number>;
