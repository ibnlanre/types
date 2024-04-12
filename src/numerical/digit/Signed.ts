import { Digit } from "./Digit";
import { Negative } from "./Negative";

/**
 * Signed digit.
 */
export type Signed = Digit | Negative;

/**
 * @category Digit
 * @namespace Signed
 * @public
 */
export namespace Signed {
  export type String = `${Signed}`;
}
