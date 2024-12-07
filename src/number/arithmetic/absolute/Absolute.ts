import type { Fn, Math } from "@ibnlanre/types";

/**
 * Returns the absolute value of a number.
 *
 * @param Number - The number to get the absolute value of.
 * @returns The absolute value of the number.
 *
 * @example
 * ```ts
 * import type { Absolute } from "@ibnlanre/types";
 *
 * type Test = Absolute<-5>;
 * //   ^? 5
 * ```
 */
export type Absolute<Number extends number> = Math.Absolute<Number>;

/**
 * Returns the absolute value of a number.
 *
 * @param Number - The number to get the absolute value of.
 * @returns The absolute value of the number.
 *
 * @examples
 * ```ts
 * import type { Apply, TAbsolute } from "@ibnlanre/types";
 *
 * type Test = Apply<TAbsolute, [-5]>;
 * //   ^? 5
 * ```
 */
export interface TAbsolute<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Absolute<this[0]>;
}
