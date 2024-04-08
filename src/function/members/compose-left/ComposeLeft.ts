import { Add, Apply, Fn, Widen } from "@ibnlanre/types";

type ComposeLeftHelper<
  Argument extends unknown,
  Callbacks extends Fn[],
  Position extends number = 0
> = Callbacks extends [infer Left extends Fn, ...infer Rest extends Fn[]]
  ? Argument extends Fn.Arguments<Left>
    ? ComposeLeftHelper<Apply<Left, [Argument]>, Rest, Add<Position, 1>>
    : {
        position: Position;
        scenario: Error;
        callback: Left;
        expected: Fn.Arguments<Left>;
        received: Widen<Argument>;
      }
  : never;

/**
 * Returns an `Error` object if the result from a function cannot be applied to the next function.
 *
 * @summary
 * Returns never if the argument can be applied to all the functions passed.
 *
 * @param Argument - The argument to be passed to the functions.
 * @param Callbacks - The list of functions to be applied to the argument.
 *
 * @returns An `Error` object if the argument cannot be applied to any of the functions passed.
 */
export type ComposeLeft<
  Argument extends unknown,
  Callbacks extends Fn[]
> = ComposeLeftHelper<Argument, Callbacks>;
