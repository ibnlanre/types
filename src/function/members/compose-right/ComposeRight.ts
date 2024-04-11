import { Apply, Fn } from "@ibnlanre/types";

/**
 * Returns a list of functions that can accept the result of the previous function
 *
 * @summary
 * - Omits functions that cannot be applied to the argument.
 * - Starts calculating from the argument passed
 *
 * @param Argument - The argument to be passed to the functions.
 * @param Callbacks - The list of functions to be applied to the argument.
 *
 * @returns A list of functions that can be applied to the argument in reverse order.
 */
export type ComposeRight<
  Argument extends unknown,
  Callbacks extends Fn[]
> = Callbacks extends [infer Callback extends Fn, ...infer Rest extends Fn[]]
  ? Argument extends Fn.Arguments<Callback>
    ? [Callback, ...ComposeRight<Apply<Callback, [Argument]>, Rest>]
    : []
  : Callbacks;
