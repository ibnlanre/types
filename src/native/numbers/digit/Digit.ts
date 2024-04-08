import { Negate } from "@ibnlanre/types";

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export declare namespace Digit {
  export type Negative = Negate<Digit>;
  export type Signed = Digit | Negative;
}
