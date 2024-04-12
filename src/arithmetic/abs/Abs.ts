import { Fn, Math } from "@ibnlanre/types";

/**
 * Returns the absolute value of a number.
 *
 * @param Number - The number to get the absolute value of.
 * @returns The absolute value of the number.
 *
 * @example
 * ```ts
 * import { Abs } from "@ibnlanre/types";
 *
 * type Test = Abs<-5>;
 * //   ^? 5
 * ```
 */
export type Abs<Number extends number> = Math.Abs<Number>;

/**
 * Returns the absolute value of a number.
 *
 * @param Number - The number to get the absolute value of.
 * @returns The absolute value of the number.
 *
 * @examples
 * ```ts
 * import { Apply, TAbs } from "@ibnlanre/types";
 *
 * type Test = Apply<TAbs, [-5]>;
 * //   ^? 5
 * ```
 */
export interface TAbs<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Abs<this[0]>;
}
