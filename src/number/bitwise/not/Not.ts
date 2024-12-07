import type { Bit, Fn } from "@ibnlanre/types";

/**
 * A type representing the result of a logical NOT operation.
 *
 * @param Proposition - The proposition to NOT.
 * @returns The result of the NOT operation.
 *
 * @example
 * ```ts
 * import { Not } from "@ibnlanre/types";
 *
 * type Test = Not<0>;
 * //   ^? 1
 * ```
 */
export type Not<Proposition extends Bit> = Proposition extends 0 ? 1 : 0;

/**
 * Performs a logical NOT operation on a proposition.
 *
 * @param Proposition - The proposition to NOT.
 * @returns The result of the NOT operation.
 *
 * @example
 * ```ts
 * import { Apply, TNot } from "@ibnlanre/types";
 *
 * type Test = Apply<TNot, [0]>;
 * //   ^? 1
 * ```
 */
export interface TNot<Proposition extends Bit | void = void>
  extends Fn<{
    0: Bit;
  }> {
  slot: [Proposition];
  data: Not<this[0]>;
}
