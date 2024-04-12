import { ArrayOf, Bit, Digit, IsExactType } from "@ibnlanre/types";
import { MakeBinaryTable } from "src/arithmetic/math/make-binary-table";
// import { MakeFirstRow } from "../types/add";

// type OperationResult<
//   Carry extends Digit = Digit,
//   Result extends Digit = Digit
// > = [Carry, Result];

// type AdditiveOperationResult<
//   Carry extends Bit = Bit,
//   Result extends Digit = Digit
// > = OperationResult<Carry, Result>;

// type MakeFirstRow<A extends AdditiveOperationResult[]> =
//   A["length"] extends Digit
//     ? MakeFirstRow<[...A, AdditiveOperationResult<0, A["length"]>]>
//     : A;

// type FirstAdditiveResultRow = MakeFirstRow<[]>;

// declare type RotateLeftWithCarry<A> = A extends [
//   AdditiveOperationResult<any, infer R>,
//   ...infer TTail
// ]
//   ? [...TTail, AdditiveOperationResult<1, R>]
//   : never;

// declare type MakeAdditionTable<T extends unknown[]> = T["length"] extends 10
//   ? T
//   : MakeAdditionTable<[...T, RotateLeftWithCarry<Last<T>>]>;

// declare type AdditionTable = MakeAdditionTable<[FirstAdditiveResultRow]>;

// type ExpandArray<List extends unknown[]> = List extends [
//   infer Head,
//   ...infer Tail
// ]
//   ? Head extends unknown[]
//     ? [ExpandArray<Head>, ...ExpandArray<Tail>]
//     : [Head, ...ExpandArray<Tail>]
//   : [];

// type Test = ExpandArray<MakeFirstRow>;

// type ZeroDigitRow<Row extends Digit[] = []> = Row["length"] extends Digit
//   ? ZeroDigitRow<[...Row, Row["length"]]>
//   : Row;

// type FirstRow = [...ArrayOf<9, 0>, 1];

// type MakeAdditionTable<Table extends Digit[][] = []> =
//   Table["length"] extends 10
//     ? Table
//     : MakeAdditionTable<[...Table, ShiftIn<GetLastRow<Table>>]>;

// type AddDigitTable = [
//   MakeAdditionTable<[MakeFirstRow]>,
//   MakeAdditionTable<[ShiftIn<MakeFirstRow>]>
// ];

// type AddDigitCarryTable = [
//   MakeAdditionTable<[ArrayOf<10, 0>]>,
//   MakeAdditionTable<[[...ArrayOf<9, 0>, 1]]>
// ];

// type AddDigitTable = MakeBinaryTable<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>;
// type AddDigitCarryTable = MakeBinaryTable<[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1>;

// type AddDigit<
//   Left extends Digit,
//   Right extends Digit,
//   Carry extends Bit = 0
// > = AddDigitTable[Carry][Left][Right];

// type AddCarryDigit<
//   Left extends Digit,
//   Right extends Digit,
//   Carry extends Bit = 0
// > = AddDigitCarryTable[Carry][Left][Right];

// export type AddDigits<
//   NormalisedLeft extends Digit[],
//   NormalisedRight extends Digit[],
//   Carry extends Bit = 0,
//   Result extends Digit[] = []
// > = NormalisedLeft extends [
//   ...infer Rest1 extends Digit[],
//   infer Last1 extends Digit
// ]
//   ? NormalisedRight extends [
//       ...infer Rest2 extends Digit[],
//       infer Last2 extends Digit
//     ]
//     ? AddDigits<
//         Rest1,
//         Rest2,
//         AddCarryDigit<Last1, Last2, Carry>,
//         [AddDigit<Last1, Last2, Carry>, ...Result]
//       >
//     : AddDigits<
//         Rest1,
//         [],
//         AddCarryDigit<Last1, 0, Carry>,
//         [AddDigit<Last1, 0, Carry>, ...Result]
//       >
//   : NormalisedRight extends [
//       ...infer Rest2 extends Digit[],
//       infer Last2 extends Digit
//     ]
//   ? AddDigits<
//       [],
//       Rest2,
//       AddCarryDigit<0, Last2, Carry>,
//       [AddDigit<0, Last2, Carry>, ...Result]
//     >
//   : Carry extends 1
//   ? [1, ...Result]
//   : Result;

// type Test = AddDigits<[1, 2, 4], [4, 5, 6]>;

// type AddDigitNumbers<
//   T extends DigitNumber,
//   U extends DigitNumber
// > = Sign<T> extends Sign<U>
//   ? MakeDigitNumber<Sign<T>, AddDigits<Num<T>, Num<U>>>
//   : CompareDigits<Num<T>, Num<U>> extends 1
//   ? MakeDigitNumber<Sign<T>, SubDigits<Num<T>, Num<U>>>
//   : MakeDigitNumber<InvertSign<T>, SubDigits<Num<U>, Num<T>>>;

// export type Add<
//   Augend extends number | bigint,
//   Addend extends number | bigint
// > = ToNumber<
//   FromDigitNumber<
//     Normalize<
//       AddDigitNumbers<
//         ToDigitNumber<ToString<Augend>>,
//         ToDigitNumber<ToString<Addend>>
//       >
//     >
//   >
// >;

// export type ToNumber<T extends string> = T extends `${infer N extends
//   | number
//   | bigint}`
//   ? N
//   : never;

// export type ToString<T extends number | bigint> = `${T}`;

// export type Digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// export type Digit = Digits[number];

// export type DigitNumber = { sign: "-" | ""; num: Digit[] };
// export type MakeDigitNumber<S extends "-" | "", N extends Digit[]> = {
//   sign: S;
//   num: N;
// };

// export type ToDigits<
//   T extends string,
//   Acc extends Digit[] = []
// > = T extends `${infer N extends Digit}${infer R}`
//   ? ToDigits<R, [...Acc, N]>
//   : Acc;

// export type ToDigitNumber<T extends string> = T extends `-${infer R}`
//   ? { sign: "-"; num: ToDigits<R> }
//   : { sign: ""; num: ToDigits<T> };

// export type FromDigits<T, Acc extends string = ""> = T extends [
//   infer N extends Digit,
//   ...infer R
// ]
//   ? FromDigits<R, `${Acc}${N}`>
//   : Acc;

// export type Sign<T extends DigitNumber> = T["sign"];
// export type InvertSign<T extends DigitNumber> = Sign<T> extends "-" ? "" : "-";
// export type MulSign<S1 extends "-" | "", S2 extends "-" | ""> = S1 extends "-"
//   ? S2 extends "-"
//     ? ""
//     : "-"
//   : S2 extends "-"
//   ? "-"
//   : "";

// export type Num<T extends DigitNumber> = T["num"];

// export type FromDigitNumber<T extends DigitNumber> = `${Sign<T>}${FromDigits<
//   Num<T>
// >}`;

// export type TrimZeros<T extends Digit[]> = T extends [0]
//   ? [0]
//   : T extends [0, ...infer R extends Digit[]]
//   ? TrimZeros<R>
//   : T;

// export type Normalize<
//   T extends DigitNumber,
//   Trim extends Digit[] = TrimZeros<Num<T>>
// > = Trim extends [0]
//   ? MakeDigitNumber<"", Trim>
//   : MakeDigitNumber<Sign<T>, Trim>;
