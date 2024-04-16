import { Absolute } from "../absolute";
import { Add } from "../add";
import { Divide } from "../divide";
import { GreaterThan } from "../greater-than";
import { Subtract } from "../subtract";

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
  Tolerance extends number = 0.01
> = Estimate<Value, Guess> extends infer Delta extends number
  ? GreaterThan<Difference<Delta, Guess>, Tolerance> extends 1
    ? SquareRootHelper<Value, Delta, Tolerance>
    : Delta
  : never;

/**
 * `SquareRoot` takes a number and returns the square root of that number.
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
