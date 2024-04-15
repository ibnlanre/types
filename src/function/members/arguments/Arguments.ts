import { Fn, IsVoid } from "@ibnlanre/types";

type SingleOut<List extends unknown[]> = List extends [infer Value]
  ? Value
  : List;

/**
 * Mark out the void values in a list
 *
 * @param List The list to mark out void values
 * @param Params The parameters to compare with the list
 *
 * @returns The list with void values marked out
 *
 * @description
 * - never extends void, but void does not extend never
 * - If void extends the value, we return the value
 */
type MarkOut<List extends unknown[], Params> = List extends [
  ...infer Ls,
  infer Lv
]
  ? Params extends [...infer Ts, infer Tv]
    ? IsVoid<Lv> extends 1
      ? [...MarkOut<Ls, Ts>, Tv]
      : MarkOut<Ls, Ts>
    : []
  : [];

/**
 * Get the arguments of a function
 *
 * @param Callback The function to get its arguments
 * @returns The arguments of the function
 *
 * @example
 * ```ts
 * import { Fn } from "@ibnlanre/types";
 *
 * type Test = Fn.Arguments<TTrim>;
 * //   ^? string
 * ```
 */
export type Arguments<Callback extends Fn> = Callback["slot"] extends unknown[]
  ? SingleOut<MarkOut<Callback["slot"], Fn.Parameters<Callback>>>
  : never;
