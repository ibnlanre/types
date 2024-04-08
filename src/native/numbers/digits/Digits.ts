import { Digit, UnionToTuple } from "@ibnlanre/types";

export type Digits = UnionToTuple<Digit>;

export declare namespace Digits {
  export type Negative = UnionToTuple<Digit.Negative>;
  export type Signed = UnionToTuple<Digit.Signed>;
}
