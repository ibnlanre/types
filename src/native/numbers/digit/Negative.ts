import { Negate } from "@ibnlanre/types";
import { Digit } from "./Digit";

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
