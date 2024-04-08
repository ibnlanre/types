import {
  ArrayOf,
  Digit,
  Digits,
  Or,
  TrimEnd,
  TrimStart,
} from "@ibnlanre/types";

declare type SomeExtends<List extends unknown[], T> = List extends [
  infer Head,
  ...infer Rest
]
  ? [Head] extends [T]
    ? 1
    : SomeExtends<Rest, T>
  : 0;

export declare type Add<X extends number, Y extends number> = SomeExtends<
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

declare type AddNumbers<X extends number, Y extends number> = SignedFloatToNum<
  AddSignedFloats<ToSignedFloat<X>, ToSignedFloat<Y>>
>;

declare type ToSignedFloat<N extends number> =
  DecomposeNum<N> extends NumComponents<infer TSign, infer I, infer F>
    ? SignedFloat<TSign, UnsignedFloat<SplitIntoDigits<I>, SplitIntoDigits<F>>>
    : never;

declare type SplitIntoDigits<N extends string> = N extends ""
  ? []
  : N extends `${infer D extends Digit}${infer R}`
  ? R extends ""
    ? [D]
    : R extends `${number}`
    ? [D, ...SplitIntoDigits<R>]
    : never
  : never;

declare type DecomposeNum<S extends string | number> =
  SeparateSign<`${S}`> extends [
    infer TSign extends Sign,
    infer M extends string
  ]
    ? SplitIntAndFractionParts<
        ScientificNotationAsDecimal<M>
      > extends NumComponents<never, infer I, infer F>
      ? NumComponents<TSign, TrimStart<I>, TrimEnd<F>>
      : never
    : never;

declare type ScientificNotationAsDecimal<N extends string | number> =
  `${N}` extends `${infer TSignificand extends number}e-${infer TExp extends number}`
    ? SplitIntAndFractionParts<TSignificand> extends NumComponents<
        never,
        infer I,
        infer F
      >
      ? ArrayOf<TExp, 0> extends [
          infer TIntZero extends 0,
          ...infer TFractionZeros extends 0[]
        ]
        ? Join<[TIntZero, ".", ...TFractionZeros, I, F]>
        : never
      : never
    : `${N}`;

declare type SeparateSign<S extends string> = S extends `-${infer N}`
  ? ["-", N]
  : ["+", S];

declare type SplitIntAndFractionParts<S extends string | number> =
  `${S}` extends `${infer I}.${infer F}`
    ? NumComponents<never, I, F>
    : NumComponents<never, `${S}`, "">;

declare type NumComponents<
  TSign extends Sign,
  I extends string,
  F extends string
> = [
  sign: EmptryStringAsZero<I | F> extends "0" ? "+" : TSign,
  integerPart: I,
  fractionalPart: F
];

declare type EmptryStringAsZero<S extends string> = S extends "" ? "0" : S;

declare type AddSignedFloats<
  X extends SignedFloat,
  Y extends SignedFloat
> = X extends SignedFloat<infer XSign, infer XUnsignedFloat>
  ? Y extends SignedFloat<infer YSign, infer YUnsignedFloat>
    ? {
        "-": {
          "-": SignedFloat<
            "-",
            AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
          >;
          "+": NegateSignedFloat<
            SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
          >;
        };
        "+": {
          "-": SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>;
          "+": SignedFloat<
            "+",
            AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
          >;
        };
      }[XSign][YSign]
    : never
  : never;

declare type NegateSignedFloat<X extends SignedFloat> = X extends SignedFloat<
  infer TSign,
  infer TUnsignedFloat
>
  ? SignedFloat<FlipSign<TSign>, TUnsignedFloat>
  : never;

declare type FlipSign<S extends Sign> = SignMap<"+", "-">[S];

declare type SignMap<TNegative = unknown, TPositive = unknown> = {
  "-": TNegative;
  "+": TPositive;
};

declare type AddUnsignedFloats<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = Normalise<X, Y> extends [
  ...DigitsPair<infer TNormalisedX, infer TNormalisedY>,
  infer TDecimalPlaces extends number
]
  ? DigitsToUnsignedFloat<
      DigitwiseAdd<TNormalisedX, TNormalisedY>,
      TDecimalPlaces
    >
  : never;

declare type DigitsToUnsignedFloat<
  X extends Digit[],
  TDecimalPlaces extends number,
  TFractionalDigits extends Digit[] = []
> = TFractionalDigits["length"] extends TDecimalPlaces
  ? MakeUnsignedFloat<X, TFractionalDigits>
  : X extends HeadDigitArray<infer XHead, infer XLast>
  ? DigitsToUnsignedFloat<XHead, TDecimalPlaces, [XLast, ...TFractionalDigits]>
  : never;

declare type HeadDigitArray<THead extends Digit[], TLast extends Digit> = [
  ...THead,
  TLast
];

declare type MakeUnsignedFloat<
  TIntegerDigits extends Digit[],
  TFractionalDigits extends Digit[] = []
> = UnsignedFloat<
  NormaliseIntZeros<TIntegerDigits>,
  NormaliseFractionalZeros<TFractionalDigits>
>;

declare type NormaliseIntZeros<X extends Digit[]> = LeftTrimTuple<
  X,
  0
> extends infer TTrimmedX extends Digit[]
  ? TTrimmedX extends []
    ? [0]
    : TTrimmedX
  : never;

declare type LeftTrimTuple<A extends unknown[], T> = A extends [
  infer H,
  ...infer R
]
  ? [H] extends [T]
    ? LeftTrimTuple<R, T>
    : A
  : A;

declare type NormaliseFractionalZeros<X extends Digit[]> = RightTrimTuple<X, 0>;

declare type RightTrimTuple<A extends unknown[], T> = A extends [
  ...infer H,
  infer L
]
  ? [L] extends [T]
    ? RightTrimTuple<H, T>
    : A
  : A;

declare type DigitsPair<TDigits1 extends Digit[], TDigits2 extends Digit[]> = [
  TDigits1,
  TDigits2
];

declare type DigitwiseAdd<
  TNormalisedX extends Digit[],
  TNormalisedY extends Digit[]
> = DigitwiseAdditiveOp<AdditionTable, TNormalisedX, TNormalisedY>;

declare type AdditionTable = MakeAdditionTable<[FirstAdditiveResultRow]>;

declare type FirstAdditiveResultRow = MakeFirstRow<[]>;

declare type MakeFirstRow<A extends AdditiveOperationResult[]> =
  A["length"] extends Digit
    ? MakeFirstRow<[...A, AdditiveOperationResult<0, A["length"]>]>
    : A;

declare type AdditiveOperationResult<
  C extends Bit = Bit,
  R extends Digit = Digit
> = OperationResult<C, R>;

export declare type Bit = 0 | 1;

declare type OperationResult<
  C extends Digit = Digit,
  R extends Digit = Digit
> = [carry: C, result: R];

declare type MakeAdditionTable<T extends unknown[]> = T["length"] extends 10
  ? T
  : MakeAdditionTable<[...T, RotateLeftWithCarry<Last<T>>]>;

declare type RotateLeftWithCarry<A> = A extends [
  AdditiveOperationResult<any, infer R>,
  ...infer TTail
]
  ? [...TTail, AdditiveOperationResult<1, R>]
  : never;

declare type Last<A extends unknown[]> = A extends [...unknown[], infer TLast]
  ? TLast
  : never;

declare type DigitwiseAdditiveOp<
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

declare type AdditiveOperationTable = AdditiveOperationResult[][];

declare type SubtractUnsignedFloats<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = {
  1: SignedFloat<"+", _SubtractUnsignedFloats<X, Y>>;
  0: SignedFloatZero;
  [-1]: SignedFloat<"-", _SubtractUnsignedFloats<Y, X>>;
}[CompareFloatMagnitudes<X, Y>];

declare type SignedFloatZero = SignedFloat<"+", UnsignedFloatZero>;

declare type UnsignedFloatZero = MakeUnsignedFloat<[0]>;

declare type CompareFloatMagnitudes<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = Normalise<X, Y> extends [
  ...DigitsPair<infer TNormalisedX, infer TNormalisedY>,
  number
]
  ? CompareMagnitudes<TNormalisedX, TNormalisedY>
  : never;

declare type CompareMagnitudes<
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

declare type TailDigitArray<TFirst extends Digit, TTail extends Digit[]> = [
  TFirst,
  ...TTail
];

declare type CompareDigits<A extends Digit, B extends Digit> = A extends B
  ? 0
  : _CompareDigits<A, B>;

declare type _CompareDigits<
  A extends Digit,
  B extends Digit,
  TOrderedDigits extends Digit[] = Digits
> = TOrderedDigits extends HeadDigitArray<infer THeadDigits, infer TLastDigit>
  ? A extends TLastDigit
    ? 1
    : B extends TLastDigit
    ? -1
    : _CompareDigits<A, B, THeadDigits>
  : never;

declare type _SubtractUnsignedFloats<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = Normalise<X, Y> extends [
  ...DigitsPair<infer TNormalisedX, infer TNormalisedY>,
  infer TDecimalPlaces extends number
]
  ? DigitsToUnsignedFloat<
      DigitwiseSubtract<TNormalisedX, TNormalisedY>,
      TDecimalPlaces
    >
  : never;

declare type DigitwiseSubtract<
  TNormalisedX extends Digit[],
  TNormalisedY extends Digit[]
> = DigitwiseAdditiveOp<SubtractionTable, TNormalisedX, TNormalisedY>;

declare type SubtractionTable = MakeSubtractionTable<[FirstAdditiveResultRow]>;

declare type MakeSubtractionTable<T extends unknown[]> = T["length"] extends 10
  ? T
  : MakeSubtractionTable<[...T, RotateRightWithCarry<Last<T>>]>;

declare type RotateRightWithCarry<A> = A extends [
  ...infer THead,
  AdditiveOperationResult<any, infer R>
]
  ? [AdditiveOperationResult<1, R>, ...THead]
  : never;

declare type Normalise<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = NormaliseIntPartLengths<X[0], Y[0]> extends DigitsPair<
  infer XIntegerPart,
  infer YIntegerPart
>
  ? NormaliseLengths<X[1], Y[1], "R", 0> extends DigitsPair<
      infer XFractionalPart,
      infer YFractionalPart
    >
    ? [
        xDigits: [...XIntegerPart, ...XFractionalPart],
        yDigits: [...YIntegerPart, ...YFractionalPart],
        decimalPlaces: YFractionalPart["length"]
      ]
    : never
  : never;

declare type NormaliseIntPartLengths<
  X extends Digit[],
  Y extends Digit[]
> = NormaliseLengths<X, Y, "L", 0>;

declare type NormaliseLengths<
  A extends unknown[],
  B extends unknown[],
  D extends PadDirection,
  TPadValue
> = CompareLengths<A, B> extends 0 | -1
  ? [Pad<D, A, TPadValue, B["length"]>, B]
  : [A, Pad<D, B, TPadValue, A["length"]>];

declare type CompareLengths<
  A extends unknown[],
  B extends unknown[]
> = A["length"] extends B["length"]
  ? 0
  : A["length"] extends 0
  ? -1
  : B["length"] extends 0
  ? 1
  : CompareLengths<Head<A>, Head<B>>;

declare type Head<A extends unknown[]> = A extends [...infer THead, unknown]
  ? THead
  : never;

declare type Pad<
  D extends PadDirection,
  A extends unknown[],
  V,
  N extends number
> = {
  L: LeftPad<A, V, N>;
  R: RightPad<A, V, N>;
}[D];

declare type LeftPad<
  A extends unknown[],
  V,
  N extends number
> = A["length"] extends N ? A : LeftPad<[V, ...A], V, N>;

declare type RightPad<
  A extends unknown[],
  V,
  N extends number
> = A["length"] extends N ? A : RightPad<[...A, V], V, N>;

declare type PadDirection = "L" | "R";

declare type SignedFloatToNum<TSignedFloat extends SignedFloat> =
  RoundFloat<TSignedFloat> extends SignedFloat<
    infer TSign,
    infer TUnsignedFloat
  >
    ? UnsignedFloatToNum<TUnsignedFloat, TSign>
    : never;

declare type SignedFloat<
  TSign extends Sign = Sign,
  TUnsignedFloat extends UnsignedFloat = UnsignedFloat
> = [sign: TSign, unsignedFloat: TUnsignedFloat];

declare type UnsignedFloat<
  TIntegerDigits extends Digit[] = Digit[],
  TFractionalDigits extends Digit[] = Digit[]
> = [integerDigits: TIntegerDigits, fractionalDigits: TFractionalDigits];

declare type Sign = "+" | "-";

declare type UnsignedFloatToNum<
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

declare type InferNum<S extends string, TSign extends Sign> = S extends "0"
  ? 0
  : `${SignStr<TSign>}${S}` extends `${infer N extends number}`
  ? N
  : never;

declare type SignStr<S extends Sign> = S extends "+" ? "" : S;

declare type ToDecimalString<
  TIntegerDigits extends Digit[],
  TFractionalDigits extends Digit[]
> = TFractionalDigits extends []
  ? Join<TIntegerDigits>
  : `${Join<TIntegerDigits>}.${Join<TFractionalDigits>}`;

declare type ToSmallFractionString<TFractionalDigits extends Digit[]> =
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

declare type SmallEnoughForScientificNotation<
  TFractionalDigits extends Digit[]
> = TFractionalDigits extends [0, 0, 0, 0, 0, 0, ...Digit[]] ? 1 : 0;

declare type SplitLeadingElements<
  A extends unknown[],
  T,
  L extends unknown[] = []
> = A extends [infer H, ...infer R]
  ? [H] extends [T]
    ? SplitLeadingElements<R, T, [...L, H]>
    : [L, A]
  : [L, []];

declare type Join<A extends Stringable[], S extends string = ""> = A extends [
  infer H extends Stringable,
  ...infer R extends Stringable[]
]
  ? Join<R, `${S}${H}`>
  : S;

declare type Stringable = string | number | bigint | boolean | null | undefined;

declare type RoundFloat<F extends SignedFloat> =
  SmallEnoughForScientificNotation<F[1][1]> extends 1
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
              AddUnsignedInts<FUnsignedFloat[0], [TCarryOut]>,
              TRoundedFraction
            >
          >
        : never
      : never
    : never;

declare type MakeSignedFloat<
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

declare type FloatDigitCount<TUnsignedFloat extends UnsignedFloat> = [
  ...TUnsignedFloat[0],
  ...TUnsignedFloat[1]
] extends infer TDigits extends Digit[]
  ? TDigits["length"]
  : never;

declare type FloatMaxDigits = 16;

declare type FloatMaxDigitsAsUnsignedFloat = ToUnsignedFloat<FloatMaxDigits>;

declare type ToUnsignedFloat<N extends number> = ToSignedFloat<N>[1];

declare type RoundFractionalDigits<
  F extends Digit[],
  TRoundingMap extends Digit[],
  TTargetFractionLength extends number
> = F extends HeadDigitArray<infer FHead, infer D>
  ? FHead["length"] extends TTargetFractionLength
    ? TTargetFractionLength extends 0
      ? [TRoundingMap[D]]
      : AddUnsignedInts<FHead, [TRoundingMap[D]]>
    : RoundFractionalDigits<FHead, TRoundingMap, TTargetFractionLength>
  : never;

declare type AddUnsignedInts<
  X extends Digit[],
  Y extends Digit[]
> = NormaliseIntPartLengths<X, Y> extends DigitsPair<
  infer TNormalisedX,
  infer TNormalisedY
>
  ? DigitwiseAdd<TNormalisedX, TNormalisedY>
  : never;

declare type _Compare<X extends number, Y extends number> = SignDecisionBranch<
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

declare type CompareNumberMagnitudes<
  X extends number,
  Y extends number
> = SplitAndNormalise<X, Y> extends [
  ...DigitsPair<infer TNormalisedX, infer TNormalisedY>,
  number
]
  ? CompareMagnitudes<TNormalisedX, TNormalisedY>
  : never;

declare type SplitAndNormalise<X extends number, Y extends number> = Normalise<
  ToSignedFloat<X>[1],
  ToSignedFloat<Y>[1]
>;

declare type SignDecisionBranch<
  X extends number,
  Y extends number,
  TBranches extends SignMap<SignMap, SignMap>
> = TBranches[GetSign<X>][GetSign<Y>];

declare type GetSign<N extends number> = BitMap<"-", "+">[IsPositive<N>];

declare type BitMap<TFalse = unknown, TTrue = unknown> = {
  0: TFalse;
  1: TTrue;
};

export declare type IsPositive<N extends number> = N extends N
  ? number extends N
    ? Bit
    : `${N}` extends `-${number}`
    ? 0
    : 1
  : never;

declare type RoundingCarryMap = SignMap<
  [...ArrayOf<6, 0>, ...ArrayOf<4, 1>],
  [...ArrayOf<5, 0>, ...ArrayOf<5, 1>]
>;
