import type { UnionToTuple } from "@ibnlanre/types";
import type { Digit } from "./Digit";

/**
 * Tuple of digits.
 */
export type Tuple = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @category Digit
 * @namespace Tuple
 * @public
 */
export declare namespace Tuple {
  export type Negative = UnionToTuple<Digit.Negative>;
  export namespace Negative {
    export type String = UnionToTuple<Digit.Negative.String>;
  }

  export type Signed = UnionToTuple<Digit.Signed>;
  export namespace Signed {
    export type String = UnionToTuple<Digit.Signed.String>;
  }
}
