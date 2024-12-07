import type { Absolute } from "./absolute";
import type { Add } from "./add";
import type { AddCarryDigit } from "./add-carry-digit";
import type { AddCarryDigitTable } from "./add-carry-digit-table";
import type { AddDigit } from "./add-digit";
import type { AddDigitTable } from "./add-digit-table";
import type { AddDigits } from "./add-digits";
import type { AddDigitsOperation } from "./add-digits-operation";
import type { AddNumbers } from "./add-numbers";
import type { AddSignedFloats } from "./add-signed-floats";
import type { AddThrough } from "./add-through";
import type { AddUnsignedFloats } from "./add-unsigned-floats";
import type { AddUnsignedIntegers } from "./add-unsigned-integers";
import type { Addition } from "./addition";
import type { Bigger } from "./bigger";
import type { Branch } from "./branch";
import type { Clamp } from "./clamp";
import type { Compare } from "./compare";
import type { CompareDigitTable } from "./compare-digit-table";
import type { CompareDigits } from "./compare-digits";
import type { CompareFloatMagnitudes } from "./compare-float-magnitudes";
import type { CompareIntegerMagnitudes } from "./compare-integer-magnitudes";
import type { CompareLengths } from "./compare-lengths";
import type { CompareMagnitudes } from "./compare-magnitudes";
import type { CompareNumberMagnitudes } from "./compare-number-magnitudes";
import type { CompareNumbers } from "./compare-numbers";
import type { ComparisonResult } from "./comparison-result";
import type { CrossMultiply } from "./cross-multiply";
import type { DecomposeNumber } from "./decompose-number";
import type { DigitsToUnsignedFloat } from "./digits-to-unsigned-float";
import type { Divide } from "./divide";
import type { DivideMaxDigits } from "./divide-max-digits";
import type { DivideNumbers } from "./divide-numbers";
import type { DivideSignedFloats } from "./divide-signed-floats";
import type { DivideUnsignedFloats } from "./divide-unsigned-floats";
import type { Division } from "./division";
import type { EmptyStringAsZero } from "./empty-string-as-zero";
import type { Equal } from "./equal";
import type { EuclideanDivide } from "./euclidean-divide";
import type { EuclideanDivideResult } from "./euclidean-divide-result";
import type { Exponentiate } from "./exponentiate";
import type { FlipSign } from "./flip-sign";
import type { FlipTable } from "./flip-table";
import type { FloatDigitCount } from "./float-digit-count";
import type { FloatMaxDigits } from "./float-max-digits";
import type { FloatMaxDigitsAsUnsignedFloat } from "./float-max-digits-as-unsigned-float";
import type { Floor } from "./floor";
import type { GreaterThan } from "./greater-than";
import type { GreaterThanOrEqual } from "./greater-than-or-equal";
import type { HeadDigitArray } from "./head-digit-array";
import type { InferNumber } from "./infer-number";
import type { IsEven } from "./is-even";
import type { IsEvenDigit } from "./is-even-digit";
import type { IsInteger } from "./is-integer";
import type { IsNegative } from "./is-negative";
import type { IsNonInteger } from "./is-non-integer";
import type { IsOdd } from "./is-odd";
import type { IsPositive } from "./is-positive";
import type { IsUnsignedFloatEven } from "./is-unsigned-float-even";
import type { Join } from "./join";
import type { LastRow } from "./last-row";
import type { LessThan } from "./less-than";
import type { LessThanOrEqual } from "./less-than-or-equal";
import type { LongDivide } from "./long-divide";
import type { LongDivideFraction } from "./long-divide-fraction";
import type { MakeBinaryTable } from "./make-binary-table";
import type { MakeModResult } from "./make-mod-result";
import type { MakeMultiplicationRow } from "./make-multiplication-row";
import type { MakeMultiplicationTable } from "./make-multiplication-table";
import type { MakeSignedFloat } from "./make-signed-float";
import type { MakeTable } from "./make-table";
import type { MakeUnsignedFloat } from "./make-unsigned-float";
import type { MapToOperationResult } from "./map-to-operation-result";
import type { Maximum } from "./maximum";
import type { Minimum } from "./minimum";
import type { Mod } from "./mod";
import type { ModNumbers } from "./mod-numbers";
import type { ModResult } from "./mod-result";
import type { ModSignedFloats } from "./mod-signed-floats";
import type { ModUnsignedFloats } from "./mod-unsigned-floats";
import type { Multiplication } from "./multiplication";
import type { Multiply } from "./multiply";
import type { MultiplyCarryDigit } from "./multiply-carry-digit";
import type { MultiplyCarryDigitTable } from "./multiply-carry-digit-table";
import type { MultiplyDigit } from "./multiply-digit";
import type { MultiplyDigitTable } from "./multiply-digit-table";
import type { MultiplyDigitsOperation } from "./multiply-digits-operation";
import type { MultiplyNumbers } from "./multiply-numbers";
import type { MultiplyRow } from "./multiply-row";
import type { MultiplySignedFloats } from "./multiply-signed-floats";
import type { MultiplySigns } from "./multiply-signs";
import type { MultiplyThrough } from "./multiply-through";
import type { MultiplyUnsignedFloats } from "./multiply-unsigned-floats";
import type { Negate } from "./negate";
import type { NegateSignedFloat } from "./negate-signed-float";
import type { Normalise } from "./normalise";
import type { NormaliseForCrossMultiply } from "./normalise-for-cross-multiply";
import type { NormaliseFractionalParts } from "./normalise-fractional-parts";
import type { NormaliseFractionalZeros } from "./normalise-fractional-zeros";
import type { NormaliseIntegerParts } from "./normalise-integer-parts";
import type { NormaliseIntegerZeros } from "./normalise-integer-zeros";
import type { NormaliseLengths } from "./normalise-lengths";
import type { Not } from "./not";
import type { NumberComponents } from "./number-components";
import type { NumberPair } from "./number-pair";
import type { Pad } from "./pad";
import type { PadDirection } from "./pad-direction";
import type { PadEnd } from "./pad-end";
import type { PadStart } from "./pad-start";
import type { Power } from "./power";
import type { PowerRejectingFractionalExponent } from "./power-rejecting-fractional-exponent";
import type { Round } from "./round";
import type { RoundFloat } from "./round-float";
import type { RoundFractionalDigits } from "./round-fractional-digits";
import type { RoundingCarryMap } from "./rounding-carry-map";
import type { RowShift } from "./row-shift";
import type { SafeDigitsToUnsignedFloat } from "./safe-digits-to-unsigned-float";
import type { ScientificNotationAsDecimal } from "./scientific-notation-as-decimal";
import type { SeparateSign } from "./separate-sign";
import type { Sign } from "./sign";
import type { SignMap } from "./sign-map";
import type { SignToNumber } from "./sign-to-number";
import type { SignedFloat } from "./signed-float";
import type { SignedFloatToNumber } from "./signed-float-to-number";
import type { SignedFloatZero } from "./signed-float-zero";
import type { Signum } from "./signum";
import type { SmallEnoughForScientificNotation } from "./small-enough-for-scientific-notation";
import type { Smaller } from "./smaller";
import type { SplitAndNormalise } from "./split-and-normalise";
import type { SplitComponentParts } from "./split-component-parts";
import type { SplitIntoDigits } from "./split-into-digits";
import type { SplitLeadingElements } from "./split-leading-elements";
import type { SquareRoot } from "./square-root";
import type { Subtract } from "./subtract";
import type { SubtractCarryDigit } from "./subtract-carry-digit";
import type { SubtractCarryDigitTable } from "./subtract-carry-digit-table";
import type { SubtractDigit } from "./subtract-digit";
import type { SubtractDigitTable } from "./subtract-digit-table";
import type { SubtractDigits } from "./subtract-digits";
import type { SubtractNumbers } from "./subtract-numbers";
import type { SubtractSignedFloats } from "./subtract-signed-floats";
import type { SubtractUnsignedFloats } from "./subtract-unsigned-floats";
import type { SubtractUnsignedIntegers } from "./subtract-unsigned-integers";
import type { Subtraction } from "./subtraction";
import type { TableShift } from "./table-shift";
import type { TailDigitArray } from "./tail-digit-array";
import type { ToDecimalString } from "./to-decimal-string";
import type { ToFixed } from "./to-fixed";
import type { ToSignedFloat } from "./to-signed-float";
import type { ToSmallFractionString } from "./to-small-fraction-string";
import type { ToUnsignedFloat } from "./to-unsigned-float";
import type { TrimLeadingZeros } from "./trim-leading-zeros";
import type { TrimTrailingZeros } from "./trim-trailing-zeros";
import type { UnsignedFloat } from "./unsigned-float";
import type { UnsignedFloatToNumber } from "./unsigned-float-to-number";
import type { UnsignedFloatZero } from "./unsigned-float-zero";

export declare namespace Math {
  export type {
    Absolute,
    Add,
    AddCarryDigit,
    AddCarryDigitTable,
    AddDigit,
    AddDigitTable,
    AddDigits,
    AddDigitsOperation,
    AddNumbers,
    AddSignedFloats,
    AddThrough,
    AddUnsignedFloats,
    AddUnsignedIntegers,
    Addition,
    Bigger,
    Branch,
    Clamp,
    Compare,
    CompareDigitTable,
    CompareDigits,
    CompareFloatMagnitudes,
    CompareIntegerMagnitudes,
    CompareLengths,
    CompareMagnitudes,
    CompareNumberMagnitudes,
    CompareNumbers,
    ComparisonResult,
    CrossMultiply,
    DecomposeNumber,
    DigitsToUnsignedFloat,
    Divide,
    DivideMaxDigits,
    DivideNumbers,
    DivideSignedFloats,
    DivideUnsignedFloats,
    Division,
    EmptyStringAsZero,
    Equal,
    EuclideanDivide,
    EuclideanDivideResult,
    Exponentiate,
    FlipSign,
    FlipTable,
    FloatDigitCount,
    FloatMaxDigits,
    FloatMaxDigitsAsUnsignedFloat,
    Floor,
    GreaterThan,
    GreaterThanOrEqual,
    HeadDigitArray,
    InferNumber,
    IsEven,
    IsEvenDigit,
    IsInteger,
    IsNegative,
    IsNonInteger,
    IsOdd,
    IsPositive,
    IsUnsignedFloatEven,
    Join,
    LastRow,
    LessThan,
    LessThanOrEqual,
    LongDivide,
    LongDivideFraction,
    MakeBinaryTable,
    MakeModResult,
    MakeMultiplicationRow,
    MakeMultiplicationTable,
    MakeSignedFloat,
    MakeTable,
    MakeUnsignedFloat,
    MapToOperationResult,
    Maximum,
    Minimum,
    Mod,
    ModNumbers,
    ModResult,
    ModSignedFloats,
    ModUnsignedFloats,
    Multiplication,
    Multiply,
    MultiplyCarryDigit,
    MultiplyCarryDigitTable,
    MultiplyDigit,
    MultiplyDigitTable,
    MultiplyDigitsOperation,
    MultiplyNumbers,
    MultiplyRow,
    MultiplySignedFloats,
    MultiplySigns,
    MultiplyThrough,
    MultiplyUnsignedFloats,
    Negate,
    NegateSignedFloat,
    Normalise,
    NormaliseForCrossMultiply,
    NormaliseFractionalParts,
    NormaliseFractionalZeros,
    NormaliseIntegerParts,
    NormaliseIntegerZeros,
    NormaliseLengths,
    Not,
    NumberComponents,
    NumberPair,
    Pad,
    PadDirection,
    PadEnd,
    PadStart,
    Power,
    PowerRejectingFractionalExponent,
    Round,
    RoundFloat,
    RoundFractionalDigits,
    RoundingCarryMap,
    RowShift,
    SafeDigitsToUnsignedFloat,
    ScientificNotationAsDecimal,
    SeparateSign,
    Sign,
    SignMap,
    SignToNumber,
    SignedFloat,
    SignedFloatToNumber,
    SignedFloatZero,
    Signum,
    SmallEnoughForScientificNotation,
    Smaller,
    SplitAndNormalise,
    SplitComponentParts,
    SplitIntoDigits,
    SplitLeadingElements,
    SquareRoot,
    Subtract,
    SubtractCarryDigit,
    SubtractCarryDigitTable,
    SubtractDigit,
    SubtractDigitTable,
    SubtractDigits,
    SubtractNumbers,
    SubtractSignedFloats,
    SubtractUnsignedFloats,
    SubtractUnsignedIntegers,
    Subtraction,
    TableShift,
    TailDigitArray,
    ToDecimalString,
    ToFixed,
    ToSignedFloat,
    ToSmallFractionString,
    ToUnsignedFloat,
    TrimLeadingZeros,
    TrimTrailingZeros,
    UnsignedFloat,
    UnsignedFloatToNumber,
    UnsignedFloatZero,
  };
}
