import { ArrayOf, Digit, Or } from "@ibnlanre/types";
import {
  AddUnsignedFloats,
  AddUnsignedIntegers,
  IsInteger,
  IsNegative,
  MakeUnsignedFloat,
  Normalise,
  NormaliseIntegerParts,
  NumberPair,
  Sign,
  SignedFloat,
  ToSignedFloat,
  ToUnsignedFloat,
  UnsignedFloat,
} from ".";

/**
 * Get the absolute value of a numeric literal
 *
 * @param N - The number to get the absolute value of.
 * @returns N as a positive number.
 *
 * @public
 */
export type Abs<N extends number> = N extends N
  ? `${N}` extends `-${infer M extends number}`
    ? M
    : N
  : never;

type Test = Add<32.389, 32.3245>;
//   ^?

/**
 * Add two numeric type literals.
 *
 * @param X - The first operand.
 * @param Y - The second operand.
 * @returns X + Y
 *
 * @public
 */
export type Add<X extends number, Y extends number> = SomeElementExtends<
  [X, Y],
  never
> extends 1
  ? never
  : X extends 0
  ? Y
  : Y extends 0
  ? X
  : number extends X | Y
  ? number
  : AddNumbers<X, Y>;

type AdditionTable = MakeAdditionTable<[FirstAdditiveResultRow]>;

type AdditiveOperationResult<
  C extends Bit = Bit,
  R extends Digit = Digit
> = OperationResult<C, R>;

type AdditiveOperationTable = AdditiveOperationResult[][];

/**
 * Add two numeric type literals
 *
 * @internal
 */
type AddNumbers<X extends number, Y extends number> = SignedFloatToNum<
  AddSignedFloats<ToSignedFloat<X>, ToSignedFloat<Y>>
>;

// type AddSignedFloats<
//   X extends SignedFloat,
//   Y extends SignedFloat
// > = X extends SignedFloat<infer XSign, infer XUnsignedFloat>
//   ? Y extends SignedFloat<infer YSign, infer YUnsignedFloat>
//     ? {
//         "-": {
//           "-": SignedFloat<
//             "-",
//             AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
//           >;
//           "+": NegateSignedFloat<
//             SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
//           >;
//         };
//         "+": {
//           "-": SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>;
//           "+": SignedFloat<
//             "+",
//             AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
//           >;
//         };
//       }[XSign][YSign]
//     : never
//   : never;

type AddSignedFloats<
  X extends SignedFloat,
  Y extends SignedFloat
> = X extends SignedFloat<infer XSign, infer XUnsignedFloat>
  ? Y extends SignedFloat<infer YSign, infer YUnsignedFloat>
    ? XSign extends "-"
      ? YSign extends "-"
        ? SignedFloat<"-", AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>>
        : NegateSignedFloat<
            SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
          >
      : YSign extends "-"
      ? SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
      : SignedFloat<"+", AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>>
    : never
  : never;

/**
 * Perform an AND operation on two Bit literals.
 *
 * @param A - The first operand.
 * @param B - The second operand.
 * @returns Bit - (A & B)
 *
 * @public
 */
export type And<A extends Bit, B extends Bit> = AndMap[A][B];

type AndMap = TwoBitMap<[0, 0, 0, 1]>;

/**
 * Used to represent true or false, but can be used to key into objects/tuples.
 *
 * @public
 */
export type Bit = 0 | 1;

type BitMap<TFalse = unknown, TTrue = unknown> = {
  0: TFalse;
  1: TTrue;
};

/**
 * Compare two numeric type literals.
 *
 * @param X - The number on the "left".
 * @param Y - The number on the "right".
 * @returns (-1 | 0 | 1) - (-1 if X is less than Y, 1 if X is greater than Y, 0 if X === Y).
 *
 * @public
 */
export type Compare<X extends number, Y extends number> = SomeElementExtends<
  [X, Y],
  never
> extends 1
  ? never
  : number extends X | Y
  ? ComparisonResult
  : X extends X
  ? Y extends Y
    ? _Compare<X, Y>
    : never
  : never;

type _Compare<X extends number, Y extends number> = SignDecisionBranch<
  X,
  Y,
  {
    "-": {
      "-": CompareNumberMagnitudes<Y, X>;
      "+": -1;
    };
    "+": {
      "-": 1;
      "+": CompareNumberMagnitudes<X, Y>;
    };
  }
>;

type CompareDecisionBranch<
  X extends number,
  Y extends number,
  TMap extends _CompareMap
> = TMap[Compare<X, Y>];

type CompareDigits<A extends Digit, B extends Digit> = A extends B
  ? 0
  : _CompareDigits<A, B>;

type _CompareDigits<
  A extends Digit,
  B extends Digit,
  TOrderedDigits extends Digit[] = OrderedDigits
> = TOrderedDigits extends HeadDigitArray<infer THeadDigits, infer TLastDigit>
  ? A extends TLastDigit
    ? 1
    : B extends TLastDigit
    ? -1
    : _CompareDigits<A, B, THeadDigits>
  : never;

type CompareFloatMagnitudes<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = Normalise<X, Y> extends [
  ...NumberPair<infer TNormalisedX, infer TNormalisedY>,
  number
]
  ? CompareMagnitudes<TNormalisedX, TNormalisedY>
  : never;

type CompareIntMagnitudes<
  X extends Digit[],
  Y extends Digit[]
> = NormaliseIntegerParts<X, Y> extends NumberPair<
  infer TNormalisedX,
  infer TNormalisedY
>
  ? CompareMagnitudes<TNormalisedX, TNormalisedY>
  : never;

type CompareMagnitudes<
  TNormalisedX extends Digit[],
  TNormalisedY extends Digit[]
> = TNormalisedX extends TNormalisedY
  ? 0
  : [TNormalisedX, TNormalisedY] extends [
      TailDigitArray<infer XFirst, infer XTail>,
      TailDigitArray<infer YFirst, infer YTail>
    ]
  ? CompareDigits<XFirst, YFirst> extends 0
    ? CompareMagnitudes<XTail, YTail>
    : CompareDigits<XFirst, YFirst>
  : never;

type _CompareMap = {
  [K in ComparisonResult]: unknown;
};

type CompareNumberMagnitudes<
  X extends number,
  Y extends number
> = SplitAndNormalise<X, Y> extends [
  ...NumberPair<infer TNormalisedX, infer TNormalisedY>,
  number
]
  ? CompareMagnitudes<TNormalisedX, TNormalisedY>
  : never;

type ComparisonResult = -1 | 0 | 1;

type CrossMultiply<
  X extends Digit[],
  Y extends Digit[],
  TShift extends 0[] = [],
  TPrevRowResult extends Digit[] = []
> = Y extends HeadDigitArray<infer YHead, infer B>
  ? CrossMultiply<
      X,
      YHead,
      [...TShift, 0],
      NormaliseIntZeros<
        AddUnsignedIntegers<TPrevRowResult, [...MultiplyRow<X, B>, ...TShift]>
      >
    >
  : TPrevRowResult;

type DigitsToUnsignedFloat<
  X extends Digit[],
  TDecimalPlaces extends number,
  TFractionalDigits extends Digit[] = []
> = TFractionalDigits["length"] extends TDecimalPlaces
  ? MakeUnsignedFloat<X, TFractionalDigits>
  : X extends HeadDigitArray<infer XHead, infer XLast>
  ? DigitsToUnsignedFloat<XHead, TDecimalPlaces, [XLast, ...TFractionalDigits]>
  : never;

type DigitwiseAdd<
  TNormalisedX extends Digit[],
  TNormalisedY extends Digit[]
> = DigitwiseAdditiveOp<AdditionTable, TNormalisedX, TNormalisedY>;

type DigitwiseAdditiveOp<
  TTable extends AdditiveOperationTable,
  X extends Digit[],
  Y extends Digit[],
  TCarryIn extends Bit = 0,
  TFinalResult extends Digit[] = []
> = [X, Y] extends [
  HeadDigitArray<infer XHead, infer A>,
  HeadDigitArray<infer YHead, infer B>
]
  ? TTable[TCarryIn][A] extends AdditiveOperationResult<
      infer TCarryOut1,
      infer AAndCarryIn
    >
    ? TTable[B][AAndCarryIn] extends AdditiveOperationResult<
        infer TCarryOut2,
        infer TResult
      >
      ? DigitwiseAdditiveOp<
          TTable,
          XHead,
          YHead,
          Or<TCarryOut1, TCarryOut2>,
          [TResult, ...TFinalResult]
        >
      : never
    : never
  : [TCarryIn, ...TFinalResult];

type DigitwiseSubtract<
  TNormalisedX extends Digit[],
  TNormalisedY extends Digit[]
> = DigitwiseAdditiveOp<SubtractionTable, TNormalisedX, TNormalisedY>;

/**
 * Divide two numeric type literals.
 *
 * @param TNumerator - The numerator (a.k.a dividend)
 * @param TDivisor - The divisor (a.k.a denominator)
 * @returns TNumerator / TDivisor
 *
 * @public
 */
export type Divide<
  TNumerator extends number,
  TDivisor extends number
> = SomeElementExtends<[TNumerator, TDivisor], never> extends 1
  ? never
  : TDivisor extends 0
  ? never
  : TNumerator extends 0
  ? 0
  : TDivisor extends 1
  ? TNumerator
  : number extends TNumerator | TDivisor
  ? number
  : TDivisor extends -1
  ? Negate<TNumerator>
  : DivideNumbers<TNumerator, TDivisor>;

type DivideMaxDigits = 13;

type DivideNumbers<
  TNumerator extends number,
  TDivisor extends number
> = SignedFloatToNum<
  DivideSignedFloats<ToSignedFloat<TNumerator>, ToSignedFloat<TDivisor>>
>;

type DivideSignedFloats<
  TNumerator extends SignedFloat,
  TDivisor extends SignedFloat
> = TNumerator extends SignedFloat<infer NSign, infer N>
  ? TDivisor extends SignedFloat<infer DSign, infer D>
    ? SignedFloat<MultiplySigns<NSign, DSign>, DivideUnsignedFloats<N, D>[0]>
    : never
  : never;

type DivideUnsignedFloats<
  TNumerator extends UnsignedFloat,
  TDivisor extends UnsignedFloat,
  TWithRemainder extends boolean = false
> = Normalise<TNumerator, TDivisor> extends [
  ...NumberPair<infer N, infer D>,
  infer TDecimalPlaces
]
  ? N extends TailDigitArray<infer TNumeratorHead, infer TNumeratorTail>
    ? [
        LongDivide<D, [TNumeratorHead], TNumeratorTail, [], TWithRemainder>,
        TDecimalPlaces
      ]
    : never
  : never;

/**
 * Perform an equality comparison on two numeric type literals.
 *
 * @param X - The number on the "left".
 * @param Y - The number on the "right".
 * @returns Bit - (1 if X \< Y, 0 if X \>= Y).
 *
 * @public
 */
export type Eq<X extends number, Y extends number> = SomeElementExtends<
  [X, Y],
  never
> extends 1
  ? never
  : number extends X | Y
  ? Bit
  : X extends Y
  ? Y extends X
    ? 1
    : 0
  : 0;

type EuclideanDivide<
  TNumerator extends Digit[],
  TDivisor extends Digit[]
> = _EuclideanDivide<TDivisor, TNumerator, [0]>;

type _EuclideanDivide<
  TDivisor extends Digit[],
  TRemainder extends Digit[],
  TQuotient extends Digit[]
> = CompareIntMagnitudes<TRemainder, TDivisor> extends 1 | 0
  ? _EuclideanDivide<
      TDivisor,
      SubtractUnsignedInts<TRemainder, TDivisor>,
      AddUnsignedIntegers<TQuotient, [1]>
    >
  : MakeModResult<TRemainder, TQuotient>;

type EuclideanDivideResult<
  TRemainder extends Digit[],
  TQuotient extends Digit
> = ModResult<TRemainder, [TQuotient]>;

type Exponentiate<X extends number, N extends number> = N extends 0
  ? 1
  : IsNegative<N> extends 1
  ? Exponentiate<Divide<1, X>, Negate<N>>
  : IsEven<N> extends 1
  ? Exponentiate<Multiply<X, X>, Divide<N, 2>>
  : Exponentiate<
      Multiply<X, X>,
      Divide<Subtract<N, 1>, 2>
    > extends infer XX extends number
  ? Multiply<X, XX>
  : never;

type FirstAdditiveResultRow = MakeFirstRow<[]>;

type FlipSign<S extends Sign> = SignMap<"+", "-">[S];

type FloatDigitCount<TUnsignedFloat extends UnsignedFloat> = [
  ...TUnsignedFloat[0],
  ...TUnsignedFloat[1]
] extends infer TDigits extends Digit[]
  ? TDigits["length"]
  : never;

type FloatMaxDigits = 16;

type FloatMaxDigitsAsUnsignedFloat = ToUnsignedFloat<FloatMaxDigits>;

type FourBits = [Bit, Bit, Bit, Bit];

type GetSign<N extends number> = BitMap<"-", "+">[IsPositive<N>];

/**
 * Perform a 'greater than' comparison on two numeric type literals.
 *
 * @param X - The number on the "left".
 * @param Y - The number on the "right".
 * @returns Bit - (1 if X \> Y, 0 if X \<= Y).
 *
 * @public
 */
export type Gt<X extends number, Y extends number> = CompareDecisionBranch<
  X,
  Y,
  {
    [-1]: 0;
    0: 0;
    1: 1;
  }
>;

/**
 * Perform a 'greater than or equal to' operation on two numeric type literals.
 *
 * @param X - The number on the "left".
 * @param Y - The number on the "right".
 * @returns Bit - (1 if X \>= Y, 0 if X \< Y).
 *
 * @public
 */
export type GtOrEq<X extends number, Y extends number> = CompareDecisionBranch<
  X,
  Y,
  {
    [-1]: 0;
    0: 1;
    1: 1;
  }
>;

type Head<A extends unknown[]> = A extends [...infer THead, unknown]
  ? THead
  : never;

type HeadDigitArray<THead extends Digit[], TLast extends Digit> = [
  ...THead,
  TLast
];

type InferNum<S extends string, TSign extends Sign> = S extends "0"
  ? 0
  : `${SignStr<TSign>}${S}` extends `${infer N extends number}`
  ? N
  : never;

/**
 * Checks if a numeric type literal is Even.
 *
 * @param N - The number to check.
 * @returns Bit - (i.e. 1 if N is Even, 0 if N is Odd. Returns never if N is has a non-zero fractional component).
 *
 * @public
 */
export type IsEven<N extends number> = number extends N
  ? Bit
  : N extends N
  ? IsUnsignedFloatEven<ToUnsignedFloat<N>>
  : never;

type IsIntEven<D extends Digit[]> = D extends HeadDigitArray<
  any,
  infer TLastDigit
>
  ? TLastDigit extends 0 | 2 | 4 | 6 | 8
    ? 1
    : 0
  : never;

/**
 * Checks if a numeric type literal is not an Integer.
 *
 * @param N - The number to check.
 * @returns Bit - (i.e. 1 if N has a non-zero fractional component, 0 if N is an Integer).
 *
 * @public
 */
export type IsNotInt<N extends number> = Not<IsInteger<N>>;

/**
 * Checks if a numeric type literal is Odd.
 *
 * @param N - The number to check.
 * @returns Bit - (i.e. 1 if N is Odd, 0 if N is Even. Returns never if N is has a non-zero fractional component).
 *
 * @public
 */
export type IsOdd<N extends number> = Not<IsEven<N>>;

/**
 * Check if a numeric literal is positive.
 *
 * @param N - The number to check.
 * @returns Bit (i.e. 1 if N is positive, 0 if N is negative).
 *
 * @public
 */
export type IsPositive<N extends number> = N extends N
  ? number extends N
    ? Bit
    : `${N}` extends `-${number}`
    ? 0
    : 1
  : never;

type IsUnsignedFloatEven<F extends UnsignedFloat> = F[1] extends []
  ? IsIntEven<F[0]>
  : never;

type Join<A extends Stringable[], S extends string = ""> = A extends [
  infer H extends Stringable,
  ...infer R extends Stringable[]
]
  ? Join<R, `${S}${H}`>
  : S;

type Last<A extends unknown[]> = A extends [...unknown[], infer TLast]
  ? TLast
  : never;

type PadStart<A extends unknown[], V, N extends number> = A["length"] extends N
  ? A
  : PadStart<[V, ...A], V, N>;

type LeftTrimTuple<A extends unknown[], T> = A extends [infer H, ...infer R]
  ? [H] extends [T]
    ? LeftTrimTuple<R, T>
    : A
  : A;

type LongDivide<
  TDivisor extends Digit[],
  TNumeratorHead extends Digit[],
  TNumeratorTail extends Digit[],
  TQuotient extends Digit[] = [],
  TWithRemainder extends boolean = false
> = EuclideanDivide<TNumeratorHead, TDivisor> extends EuclideanDivideResult<
  infer TRemainder,
  infer TNextQuotientDigit
>
  ? [
      ...TQuotient,
      TNextQuotientDigit
    ] extends infer TNextQuotient extends Digit[]
    ? TNumeratorTail extends TailDigitArray<infer TNextDigit, infer TNextTail>
      ? LongDivide<
          TDivisor,
          [...TRemainder, TNextDigit],
          TNextTail,
          TNextQuotient,
          TWithRemainder
        >
      : TWithRemainder extends false
      ? MakeUnsignedFloat<
          TNextQuotient,
          TRemainder extends [0]
            ? []
            : LongDivideFraction<TDivisor, [...TRemainder, 0]>
        >
      : MakeModResult<TRemainder, TNextQuotient>
    : never
  : never;

type LongDivideFraction<
  TDivisor extends Digit[],
  TNumerator extends Digit[],
  TQuotient extends Digit[] = []
> = _Compare<TQuotient["length"], DivideMaxDigits> extends 1
  ? TQuotient
  : EuclideanDivide<TNumerator, TDivisor> extends EuclideanDivideResult<
      infer TRemainder,
      infer TNextQuotientDigit
    >
  ? TRemainder extends [0]
    ? [...TQuotient, TNextQuotientDigit]
    : LongDivideFraction<
        TDivisor,
        [...TRemainder, 0],
        [...TQuotient, TNextQuotientDigit]
      >
  : never;

/**
 * Perform a 'less than' comparison on two numeric type literals.
 *
 * @param X - The number on the "left".
 * @param Y - The number on the "right".
 * @returns Bit - (1 if X \< Y, 0 if X \>= Y).
 *
 * @public
 */
export type Lt<X extends number, Y extends number> = Gt<Y, X>;

/**
 * Perform a 'less than or equal to' operation on two numeric type literals.
 *
 * @param X - The number on the "left".
 * @param Y - The number on the "right".
 * @returns Bit - (1 if X \<= Y, 0 if X \> Y).
 *
 * @public
 */
export type LtOrEq<X extends number, Y extends number> = GtOrEq<Y, X>;

type MakeAdditionTable<T extends unknown[]> = T["length"] extends 10
  ? T
  : MakeAdditionTable<[...T, RotateLeftWithCarry<Last<T>>]>;

type MakeFirstRow<A extends AdditiveOperationResult[]> =
  A["length"] extends Digit
    ? MakeFirstRow<[...A, AdditiveOperationResult<0, A["length"]>]>
    : A;

type MakeModResult<
  TRemainder extends Digit[],
  TQuotient extends Digit[]
> = ModResult<NormaliseIntZeros<TRemainder>, NormaliseIntZeros<TQuotient>>;

type MakeMultiplicationRow<
  N extends Digit,
  TRow extends number[] = [0]
> = TRow["length"] extends 10
  ? TRow
  : Last<TRow> extends infer TPrev extends number
  ? MakeMultiplicationRow<N, [...TRow, Add<TPrev, N>]>
  : never;

type MakeMultiplicationTable<
  TTable extends unknown[],
  X extends Digit[]
> = TTable["length"] extends 10
  ? TTable
  : X extends TailDigitArray<infer N, infer XTail>
  ? MakeMultiplicationTable<
      [...TTable, MapToOperationResult<MakeMultiplicationRow<N>>],
      XTail
    >
  : never;

type MakeSignedFloat<
  TSign extends Sign,
  TUnsignedFloat extends UnsignedFloat
> = MakeUnsignedFloat<
  TUnsignedFloat[0],
  TUnsignedFloat[1]
> extends infer TActualUnsignedFloat extends UnsignedFloat
  ? TActualUnsignedFloat extends UnsignedFloatZero
    ? SignedFloatZero
    : SignedFloat<TSign, TActualUnsignedFloat>
  : never;

type MakeSubtractionTable<T extends unknown[]> = T["length"] extends 10
  ? T
  : MakeSubtractionTable<[...T, RotateRightWithCarry<Last<T>>]>;

type MapToOperationResult<TRow extends number[]> = {
  [K in keyof TRow]: OperationResultFromNum<TRow[K]>;
};

/**
 * Get the greatest of two numeric type literals.
 *
 * @param X - The first operand.
 * @param Y - The second operand.
 * @returns X|Y - (X if X \> Y, Y if Y \> X else X (since they would be equal)).
 *
 * @public
 */
export type Max<X extends number, Y extends number> = number extends X | Y
  ? number
  : X extends Y
  ? X
  : Y extends X
  ? Y
  : Gt<X, Y> extends 1
  ? X
  : Y;

/**
 * Get the smallest of two numeric type literals.
 *
 * @param X - The first operand.
 * @param Y - The second operand.
 * @returns X|Y - (X if X \< Y, Y if Y \< X else X (since they would be equal)).
 *
 * @public
 */
export type Min<X extends number, Y extends number> = number extends X | Y
  ? number
  : X extends Y
  ? X
  : Y extends X
  ? Y
  : Lt<X, Y> extends 1
  ? X
  : Y;

/**
 * Mod two numeric type literals. This returns the remainder as per JavaScript's Remainder (%) operator.
 *
 * @param TNumerator - The numerator (a.k.a dividend)
 * @param TDivisor - The divisor (a.k.a denominator)
 * @returns TNumerator % TDivisor
 *
 * @public
 */
export type Mod<
  TNumerator extends number,
  TDivisor extends number
> = SomeElementExtends<[TNumerator, TDivisor], never> extends 1
  ? never
  : TDivisor extends 0
  ? never
  : TNumerator extends 0
  ? 0
  : number extends TNumerator | TDivisor
  ? number
  : ModNumbers<TNumerator, TDivisor>;

type ModNumbers<
  TNumerator extends number,
  TDivisor extends number
> = SignedFloatToNum<
  ModSignedFloats<ToSignedFloat<TNumerator>, ToSignedFloat<TDivisor>>
>;

type ModResult<TRemainder extends Digit[], TQuotient extends Digit[]> = [
  remainder: TRemainder,
  quotient: TQuotient
];

type ModSignedFloats<
  TNumerator extends SignedFloat,
  TDivisor extends SignedFloat
> = TNumerator extends SignedFloat<infer NSign, infer N>
  ? TDivisor extends SignedFloat<Sign, infer D>
    ? SignedFloat<NSign, ModUnsignedFloats<N, D>>
    : never
  : never;

type ModUnsignedFloats<
  TNumerator extends UnsignedFloat,
  TDivisor extends UnsignedFloat
> = DivideUnsignedFloats<TNumerator, TDivisor, true> extends [
  ModResult<infer TRemainder, infer TQuotient>,
  infer TDecimalPlaces extends number
]
  ? SafeDigitsToUnsignedFloat<TRemainder, TDecimalPlaces>
  : never;

type MultiplicationTable = MakeMultiplicationTable<[], OrderedDigits>;

/**
 * Multiply two numeric type literals.
 *
 * @param X - The first operand.
 * @param Y - The second operand.
 * @returns X * Y
 *
 * @public
 */
export type Multiply<X extends number, Y extends number> = SomeElementExtends<
  [X, Y],
  never
> extends 1
  ? never
  : X extends 0
  ? 0
  : Y extends 0
  ? 0
  : X extends 1
  ? Y
  : Y extends 1
  ? X
  : number extends X | Y
  ? number
  : X extends -1
  ? Negate<Y>
  : Y extends -1
  ? Negate<X>
  : MultiplyNumbers<X, Y>;

type MultiplyNumbers<X extends number, Y extends number> = SignedFloatToNum<
  MultiplySignedFloats<ToSignedFloat<X>, ToSignedFloat<Y>>
>;

type MultiplyRow<
  X extends Digit[],
  B extends Digit,
  TCarryIn extends Digit = 0,
  TFinalResult extends Digit[] = []
> = X extends HeadDigitArray<infer XHead, infer A>
  ? MultiplicationTable[A][B] extends OperationResult<
      infer ATimesBCarryOut,
      infer ATimesB
    >
    ? AdditionTable[ATimesB][TCarryIn] extends AdditiveOperationResult<
        infer TCarryOut2,
        infer TResult
      >
      ? AdditionTable[ATimesBCarryOut][TCarryOut2] extends AdditiveOperationResult<
          0,
          infer TFinalCarryOut
        >
        ? MultiplyRow<XHead, B, TFinalCarryOut, [TResult, ...TFinalResult]>
        : never
      : never
    : never
  : [TCarryIn, ...TFinalResult];

type MultiplySignedFloats<
  X extends SignedFloat,
  Y extends SignedFloat
> = X extends SignedFloat<infer XSign, infer XUnsignedFloat>
  ? Y extends SignedFloat<infer YSign, infer YUnsignedFloat>
    ? SignedFloat<
        MultiplySigns<XSign, YSign>,
        MultiplyUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
      >
    : never
  : never;

type MultiplySigns<
  S extends Sign,
  T extends Sign
> = SignMultiplicationMap[S][T];

type MultiplyUnsignedFloats<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = NormaliseForCrossMultiply<X, Y> extends [
  ...NumberPair<infer TNormalisedX, infer TNormalisedY>,
  infer TDecimalPlaces extends number
]
  ? SafeDigitsToUnsignedFloat<
      CrossMultiply<TNormalisedX, TNormalisedY>,
      TDecimalPlaces
    >
  : never;

/**
 * Negate a numeric literal
 *
 * @param N - The number to negate.
 * @returns -N
 *
 * @public
 */
export type Negate<N extends number> = N extends 0
  ? 0
  : number extends N
  ? number
  : `${N}` extends `-${infer M extends number}`
  ? M
  : `-${N}` extends `${infer M extends number}`
  ? M
  : never;

type NegateSignedFloat<X extends SignedFloat> = X extends SignedFloat<
  infer TSign,
  infer TUnsignedFloat
>
  ? SignedFloat<FlipSign<TSign>, TUnsignedFloat>
  : never;

type NormaliseForCrossMultiply<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = X extends UnsignedFloat<infer XIntegerPart, infer XFractionalPart>
  ? Y extends UnsignedFloat<infer YIntegerPart, infer YFractionalPart>
    ? [
        xDigits: NormaliseIntZeros<[...XIntegerPart, ...XFractionalPart]>,
        yDigits: NormaliseIntZeros<[...YIntegerPart, ...YFractionalPart]>,
        decimalPlaces: AddNumbers<
          XFractionalPart["length"],
          YFractionalPart["length"]
        >
      ]
    : never
  : never;

type NormaliseFractionalZeros<X extends Digit[]> = RightTrimTuple<X, 0>;

type NormaliseIntZeros<X extends Digit[]> = LeftTrimTuple<
  X,
  0
> extends infer TTrimmedX extends Digit[]
  ? TTrimmedX extends []
    ? [0]
    : TTrimmedX
  : never;

type Test2 = NormaliseIntZeros<[0]>;

/**
 * Perform an NOT operation on a Bit literals.
 *
 * @param B - The operand to NOT.
 * @returns Bit - (~B)
 *
 * @public
 */
export type Not<B extends Bit> = NotMap[B];

type NotMap = BitMap<1, 0>;

type NumsUpto<N extends number, A extends number[] = []> = A["length"] extends N
  ? Reject<A, never>
  : NumsUpto<N, [...A, A["length"]]>;

type OperationResult<C extends Digit = Digit, R extends Digit = Digit> = [
  carry: C,
  result: R
];

type OperationResultFromNum<N extends number> =
  `${N}` extends `${infer C extends Digit}${infer R extends Digit}`
    ? OperationResult<C, R>
    : `${N}` extends `${infer R extends Digit}`
    ? OperationResult<0, R>
    : never;

type OrderedDigits = NumsUpto<10>;

/**
 * Raise a numeric literal to the power of another.
 *
 * @param X - The base.
 * @param N - The exponent (a.k.a power). Must be an Integer.
 * @returns X^N
 *
 * @public
 */
export type Pow<X extends number, N extends number> = SomeElementExtends<
  [X, N],
  never
> extends 1
  ? never
  : N extends 0
  ? 1
  : N extends 1
  ? X
  : X extends 1
  ? 1
  : X extends -1
  ? number extends N
    ? -1 | 1
    : PowRejectingFractionalExponent<X, N>
  : X extends 0
  ? IsNegative<N> extends 1
    ? never
    : 0
  : number extends X | N
  ? number
  : PowRejectingFractionalExponent<X, N>;

type PowRejectingFractionalExponent<
  X extends number,
  N extends number
> = IsInteger<N> extends 0 ? never : Exponentiate<X, N>;

type Reject<A extends unknown[], T> = A extends [infer H, ...infer R]
  ? [H] extends [T]
    ? Reject<R, T>
    : [H, ...Reject<R, T>]
  : [];

type PadEnd<A extends unknown[], V, N extends number> = A["length"] extends N
  ? A
  : PadEnd<[...A, V], V, N>;

type RightTrimTuple<A extends unknown[], T> = A extends [...infer H, infer L]
  ? [L] extends [T]
    ? RightTrimTuple<H, T>
    : A
  : A;

type RotateLeftWithCarry<A> = A extends [
  AdditiveOperationResult<any, infer R>,
  ...infer TTail
]
  ? [...TTail, AdditiveOperationResult<1, R>]
  : never;

type RotateRightWithCarry<A> = A extends [
  ...infer THead,
  AdditiveOperationResult<any, infer R>
]
  ? [AdditiveOperationResult<1, R>, ...THead]
  : never;

type RoundFloat<F extends SignedFloat> = SmallEnoughForScientificNotation<
  F[1][1]
> extends 1
  ? F
  : F extends SignedFloat<infer TSign, infer FUnsignedFloat>
  ? _Compare<FloatDigitCount<FUnsignedFloat>, FloatMaxDigits> extends -1 | 0
    ? F
    : SubtractUnsignedFloats<
        FloatMaxDigitsAsUnsignedFloat,
        ToUnsignedFloat<FUnsignedFloat[0]["length"]>
      > extends SignedFloat<
        infer TTargetFractionLengthSign,
        infer TTargetFractionLength
      >
    ? TTargetFractionLengthSign extends "-"
      ? F
      : RoundFractionalDigits<
          FUnsignedFloat[1],
          RoundingCarryMap[TSign],
          UnsignedFloatToNum<TTargetFractionLength, "+">
        > extends [
          infer TCarryOut extends Digit,
          ...infer TRoundedFraction extends Digit[]
        ]
      ? MakeSignedFloat<
          TSign,
          UnsignedFloat<
            AddUnsignedIntegers<FUnsignedFloat[0], [TCarryOut]>,
            TRoundedFraction
          >
        >
      : never
    : never
  : never;

type RoundFractionalDigits<
  F extends Digit[],
  TRoundingMap extends Digit[],
  TTargetFractionLength extends number
> = F extends HeadDigitArray<infer FHead, infer D>
  ? FHead["length"] extends TTargetFractionLength
    ? TTargetFractionLength extends 0
      ? [TRoundingMap[D]]
      : AddUnsignedIntegers<FHead, [TRoundingMap[D]]>
    : RoundFractionalDigits<FHead, TRoundingMap, TTargetFractionLength>
  : never;

type RoundingCarryMap = SignMap<
  [...ArrayOf<6, 0>, ...ArrayOf<4, 1>],
  [...ArrayOf<5, 0>, ...ArrayOf<5, 1>]
>;

type SafeDigitsToUnsignedFloat<
  X extends Digit[],
  TDecimalPlaces extends number,
  TFractionalDigits extends Digit[] = []
> = _Compare<X["length"], TDecimalPlaces> extends -1
  ? DigitsToUnsignedFloat<PadStart<X, 0, TDecimalPlaces>, TDecimalPlaces>
  : DigitsToUnsignedFloat<X, TDecimalPlaces>;

type SignDecisionBranch<
  X extends number,
  Y extends number,
  TBranches extends SignMap<SignMap, SignMap>
> = TBranches[GetSign<X>][GetSign<Y>];

type SignedFloatToNum<TSignedFloat extends SignedFloat> =
  RoundFloat<TSignedFloat> extends SignedFloat<
    infer TSign,
    infer TUnsignedFloat
  >
    ? UnsignedFloatToNum<TUnsignedFloat, TSign>
    : never;

type SignedFloatZero = SignedFloat<"+", UnsignedFloatZero>;

type SignMap<TNegative = unknown, TPositive = unknown> = {
  "-": TNegative;
  "+": TPositive;
};

type SignMultiplicationMap = SignMap<SignMap<"+", "-">, SignMap<"-", "+">>;

type SignStr<S extends Sign> = S extends "+" ? "" : S;

type SmallEnoughForScientificNotation<TFractionalDigits extends Digit[]> =
  TFractionalDigits extends [0, 0, 0, 0, 0, 0, ...Digit[]] ? 1 : 0;

type SomeElementExtends<A extends unknown[], T> = A extends [
  infer H,
  ...infer R
]
  ? [H] extends [T]
    ? 1
    : SomeElementExtends<R, T>
  : 0;

type SplitAndNormalise<X extends number, Y extends number> = Normalise<
  ToSignedFloat<X>[1],
  ToSignedFloat<Y>[1]
>;

type SplitLeadingElements<
  A extends unknown[],
  T,
  L extends unknown[] = []
> = A extends [infer H, ...infer R]
  ? [H] extends [T]
    ? SplitLeadingElements<R, T, [...L, H]>
    : [L, A]
  : [L, []];

type Stringable = string | number | bigint | boolean | null | undefined;

/**
 * Perform subtraction on two numeric type literals.
 *
 * @param X - The first operand.
 * @param Y - The second operand.
 * @returns X - Y
 *
 * @public
 */
export type Subtract<X extends number, Y extends number> = SomeElementExtends<
  [X, Y],
  never
> extends 1
  ? never
  : number extends X | Y
  ? number
  : X extends 0
  ? Negate<Y>
  : Y extends 0
  ? X
  : SubtractNumbers<X, Y>;

type SubtractionTable = MakeSubtractionTable<[FirstAdditiveResultRow]>;

type SubtractNumbers<X extends number, Y extends number> = SignedFloatToNum<
  SubtractSignedFloats<ToSignedFloat<X>, ToSignedFloat<Y>>
>;

type SubtractSignedFloats<
  X extends SignedFloat,
  Y extends SignedFloat
> = X extends SignedFloat<infer XSign, infer XUnsignedFloat>
  ? Y extends SignedFloat<infer YSign, infer YUnsignedFloat>
    ? XSign extends "-"
      ? YSign extends "-"
        ? NegateSignedFloat<
            SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
          >
        : SignedFloat<"-", AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>>
      : YSign extends "-"
      ? SignedFloat<"+", AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>>
      : SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
    : never
  : never;

type SubtractUnsignedFloats<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = CompareFloatMagnitudes<X, Y> extends 1
  ? SignedFloat<"+", _SubtractUnsignedFloats<X, Y>>
  : CompareFloatMagnitudes<X, Y> extends 0
  ? SignedFloatZero
  : SignedFloat<"-", _SubtractUnsignedFloats<Y, X>>;

type _SubtractUnsignedFloats<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = Normalise<X, Y> extends [
  ...NumberPair<infer TNormalisedX, infer TNormalisedY>,
  infer TDecimalPlaces extends number
]
  ? DigitsToUnsignedFloat<
      DigitwiseSubtract<TNormalisedX, TNormalisedY>,
      TDecimalPlaces
    >
  : never;

type SubtractUnsignedInts<
  X extends Digit[],
  Y extends Digit[]
> = NormaliseIntegerParts<X, Y> extends NumberPair<
  infer TNormalisedX,
  infer TNormalisedY
>
  ? DigitwiseSubtract<TNormalisedX, TNormalisedY>
  : never;

type TailDigitArray<TFirst extends Digit, TTail extends Digit[]> = [
  TFirst,
  ...TTail
];

type ToDecimalString<
  TIntegerDigits extends Digit[],
  TFractionalDigits extends Digit[]
> = TFractionalDigits extends []
  ? Join<TIntegerDigits>
  : `${Join<TIntegerDigits>}.${Join<TFractionalDigits>}`;

type ToSmallFractionString<TFractionalDigits extends Digit[]> =
  SmallEnoughForScientificNotation<TFractionalDigits> extends 1
    ? SplitLeadingElements<TFractionalDigits, 0> extends [
        infer TFractionalZeros extends 0[],
        infer TSignificand extends Digit[]
      ]
      ? TSignificand extends TailDigitArray<
          infer TSignificandInt,
          infer TSignificandFraction
        >
        ? [0, ...TFractionalZeros]["length"] extends infer TExp extends number
          ? `${SignedFloatToNum<
              RoundFloat<
                SignedFloat<"+", [[TSignificandInt], TSignificandFraction]>
              >
            >}e-${TExp}`
          : never
        : never
      : never
    : ToDecimalString<[0], TFractionalDigits>;

type TwoBitMap<R extends FourBits = FourBits> = BitMap<
  BitMap<R[0], R[1]>,
  BitMap<R[2], R[3]>
>;

type UnsignedFloatToNum<
  TUnsignedFloat extends UnsignedFloat,
  TSign extends Sign
> = TUnsignedFloat extends UnsignedFloat<
  infer TIntegerDigits,
  infer TFractionalDigits
>
  ? TIntegerDigits extends [0]
    ? InferNum<ToSmallFractionString<TFractionalDigits>, TSign>
    : InferNum<ToDecimalString<TIntegerDigits, TFractionalDigits>, TSign>
  : never;

type UnsignedFloatZero = MakeUnsignedFloat<[0]>;

/**
 * Perform an XOR (exclusive OR) operation on two Bit literals.
 *
 * @param A - The first operand.
 * @param B - The second operand.
 * @returns Bit - (A xor B)
 *
 * @public
 */
export type Xor<A extends Bit, B extends Bit> = XorMap[A][B];

type XorMap = TwoBitMap<[0, 1, 1, 0]>;

export {};
