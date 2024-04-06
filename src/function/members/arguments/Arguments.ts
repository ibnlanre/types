import { Fn, TTrim } from "@ibnlanre/types";

type SingleOut<List extends unknown[]> = List extends [infer Value]
  ? Value
  : List;

type MarkOut<List extends unknown[], Params> = List extends [
  ...infer Ls,
  infer Lv
]
  ? Params extends [...infer Ts, infer Tv]
    ? [Lv] extends [void]
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

type Test = Fn.Parameters<TTrim>;
