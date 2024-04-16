import { Add } from "../add";
import { Divide } from "../divide";
import { GreaterThan } from "../greater-than";
import { Multiply } from "../multiply";
import { Subtract } from "../subtract";

type SquareRootHelper<
  Value extends number,
  Guess extends number = Divide<Value, 2>,
  Difference extends number = 1,
  Tolerance extends number = 0.01
> = GreaterThan<Difference, Tolerance> extends 1
  ? Multiply<
      0.5,
      Add<Guess, Divide<Value, Guess>>
    > extends infer x1 extends number
    ? SquareRootHelper<Value, x1, Subtract<Guess, x1>>
    : never
  : Guess;

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
