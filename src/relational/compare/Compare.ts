import { Fn, Math } from "@ibnlanre/types";

// /**
//  * Compares two numbers.
//  *
//  * @description
//  * The result of the comparison is:
//  * - 0 if the two numbers are equal.
//  * - 1 if the first number is greater than the second number.
//  * - -1 if the first number is less than the second number.
//  *
//  * @param Left - The first number to compare.
//  * @param Right - The second number to compare.
//  *
//  * @returns The result of the comparison.
//  */
// export interface TCompare<
//   Left extends number | void = void,
//   Right extends number | void = void
// > extends Fn<{
//     0: number;
//     1: number;
//   }> {
//   slot: [Left, Right];
//   data: Compare<this[0], this[1]>;
// }

// export { Compare };

import type {
  Digit,
  DigitNumber,
  Num,
  Sign,
  ToDigitNumber,
  ToString,
} from "./common";

export type CompareLength<
  T extends any[],
  U extends any[]
> = T["length"] extends U["length"] ? 1 : 0;

export type DigitCompareTable = [
  [0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [1, 0, -1, -1, -1, -1, -1, -1, -1, -1],
  [1, 1, 0, -1, -1, -1, -1, -1, -1, -1],
  [1, 1, 1, 0, -1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 0, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 0, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1, 0, -1, -1, -1],
  [1, 1, 1, 1, 1, 1, 1, 0, -1, -1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, -1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
];

type Test = Math.FlipTable<DigitCompareTable>[9];

export type DigitCompare<
  D1 extends Digit,
  D2 extends Digit
> = DigitCompareTable[D1][D2];

export type CompareDigitsWithEqualLength<
  T extends Digit[],
  U extends Digit[]
> = T extends [infer N1 extends Digit, ...infer R1 extends Digit[]]
  ? U extends [infer N2 extends Digit, ...infer R2 extends Digit[]]
    ? DigitCompare<N1, N2> extends 0
      ? CompareDigitsWithEqualLength<R1, R2>
      : DigitCompare<N1, N2>
    : 0
  : 0;

export type CompareDigits<T extends Digit[], U extends Digit[]> = CompareLength<
  T,
  U
> extends 1
  ? CompareDigitsWithEqualLength<T, U>
  : keyof U extends keyof T
  ? 1
  : -1;

export type CompareDigitNumbers<
  T extends DigitNumber,
  U extends DigitNumber
> = Sign<T> extends Sign<U>
  ? Sign<T> extends ""
    ? CompareDigits<Num<T>, Num<U>>
    : CompareDigits<Num<U>, Num<T>>
  : Sign<T> extends "-"
  ? -1
  : 1;

/**
 * Compare two numbers
 * @param T - First number
 * @param U - Second number
 * @returns 0 if T = U, 1 if T > U, -1 if T < U
 */
export type Compare<
  T extends number | bigint,
  U extends number | bigint
> = T extends U
  ? 0
  : CompareDigitNumbers<ToDigitNumber<ToString<T>>, ToDigitNumber<ToString<U>>>;
