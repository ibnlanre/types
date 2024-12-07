import type { Absolute } from "../absolute";
import type { Add } from "../add";
import type { Divide } from "../divide";
import type { GreaterThan } from "../greater-than";
import type { Multiply } from "../multiply";
import type { Subtract } from "../subtract";

type Estimate<Value extends number, Guess extends number> = Divide<
  Add<Multiply<2, Guess>, Divide<Value, Multiply<Guess, Guess>>>,
  3
>;

type Difference<Estimate extends number, Guess extends number> = Absolute<
  Subtract<Estimate, Guess>
>;

type CubeRootHelper<
  Value extends number,
  Tolerance extends number,
  Guess extends number = Divide<Value, 3>,
  Quotient extends number = Estimate<Value, Guess>,
  Delta extends number = Difference<Quotient, Guess>
> = GreaterThan<Delta, Tolerance> extends 1
  ? CubeRootHelper<Value, Tolerance, Quotient>
  : Quotient;

/**
 * `CubeRoot` takes a number and returns the cube root of that number.
 *
 * @description
 * This algorithm is based on an iterative method for finding the cube root of a number.
 *
 * The default tolerance is 0.00000001.
 *
 * @param Number A number to find the cube root of.
 * @param [Tolerance] The tolerance is the maximum difference between the estimate and the guess.
 * @returns The cube root of the number.
 *
 * @example
 * type Result = CubeRoot<27>;
 * //   ^? type Result = 3
 *
 * @since 0.1.0
 */
export type CubeRoot<
  Number extends number,
  Tolerance extends number = 0.00000001
> = CubeRootHelper<Number, Tolerance>;
