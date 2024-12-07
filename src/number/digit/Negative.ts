import type { Negate } from "@ibnlanre/types";
import type { Digit } from "./Digit";

/**
 * Negative digit.
 */
export type Negative = Negate<Digit>;

/**
 * @category Digit
 * @namespace Negative
 * @public
 */
export namespace Negative {
  export type String = `${Negative}`;
}
