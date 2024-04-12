import { Abs } from "./abs";
import { Add } from "./add";
import { AddCarryDigit } from "./add-carry-digit";
import { AddCarryDigitTable } from "./add-carry-digit-table";
import { AddDigit } from "./add-digit";
import { AddDigitTable } from "./add-digit-table";
import { AddDigits } from "./add-digits";
import { AddDigitsOperation } from "./add-digits-operation";
import { AddNumbers } from "./add-numbers";
import { AddSignedFloats } from "./add-signed-floats";
import { AddUnsignedFloats } from "./add-unsigned-floats";
import { AddUnsignedIntegers } from "./add-unsigned-integers";
import { Addition } from "./addition";
import { Bigger } from "./bigger";
import { Branch } from "./branch";
import { Clamp } from "./clamp";
import { Compare } from "./compare";
import { CompareDigitTable } from "./compare-digit-table";
import { CompareDigits } from "./compare-digits";
import { CompareFloatMagnitudes } from "./compare-float-magnitudes";
import { CompareIntegerMagnitudes } from "./compare-integer-magnitudes";
import { CompareLengths } from "./compare-lengths";
import { CompareMagnitudes } from "./compare-magnitudes";
import { CompareNumberMagnitudes } from "./compare-number-magnitudes";
import { CompareNumbers } from "./compare-numbers";
import { ComparisonResult } from "./comparison-result";
import { CrossMultiply } from "./cross-multiply";
import { DecomposeNumber } from "./decompose-number";
import { DigitsToUnsignedFloat } from "./digits-to-unsigned-float";
import { Divide } from "./divide";
import { DivideMaxDigits } from "./divide-max-digits";
import { DivideNumbers } from "./divide-numbers";
import { DivideSignedFloats } from "./divide-signed-floats";
import { DivideUnsignedFloats } from "./divide-unsigned-floats";
import { Division } from "./division";
import { EmptyStringAsZero } from "./empty-string-as-zero";
import { Equal } from "./equal";
import { EuclideanDivide } from "./euclidean-divide";
import { EuclideanDivideResult } from "./euclidean-divide-result";
import { Exponentiate } from "./exponentiate";
import { FlipSign } from "./flip-sign";
import { FlipTable } from "./flip-table";
import { FloatDigitCount } from "./float-digit-count";
import { FloatMaxDigits } from "./float-max-digits";
import { FloatMaxDigitsAsUnsignedFloat } from "./float-max-digits-as-unsigned-float";
import { GreaterThan } from "./greater-than";
import { GreaterThanOrEqualTo } from "./greater-than-or-equal-to";
import { HeadDigitArray } from "./head-digit-array";
import { InferNumber } from "./infer-number";
import { IsEven } from "./is-even";
import { IsEvenDigit } from "./is-even-digit";
import { IsInteger } from "./is-integer";
import { IsNegative } from "./is-negative";
import { IsNonInteger } from "./is-non-integer";
import { IsOdd } from "./is-odd";
import { IsPositive } from "./is-positive";
import { IsUnsignedFloatEven } from "./is-unsigned-float-even";
import { Join } from "./join";
import { LastRow } from "./last-row";
import { LessThan } from "./less-than";
import { LessThanOrEqualTo } from "./less-than-or-equal-to";
import { LongDivide } from "./long-divide";
import { LongDivideFraction } from "./long-divide-fraction";
import { MakeBinaryTable } from "./make-binary-table";
import { MakeModResult } from "./make-mod-result";
import { MakeMultiplicationRow } from "./make-multiplication-row";
import { MakeMultiplicationTable } from "./make-multiplication-table";
import { MakeSignedFloat } from "./make-signed-float";
import { MakeTable } from "./make-table";
import { MakeUnsignedFloat } from "./make-unsigned-float";
import { MapToOperationResult } from "./map-to-operation-result";
import { Maximum } from "./maximum";
import { Minimum } from "./minimum";
import { Mod } from "./mod";
import { ModNumbers } from "./mod-numbers";
import { ModResult } from "./mod-result";
import { ModSignedFloats } from "./mod-signed-floats";
import { ModUnsignedFloats } from "./mod-unsigned-floats";
import { Multiplication } from "./multiplication";
import { Multiply } from "./multiply";
import { MultiplyCarryDigit } from "./multiply-carry-digit";
import { MultiplyCarryDigitTable } from "./multiply-carry-digit-table";
import { MultiplyDigit } from "./multiply-digit";
import { MultiplyDigitTable } from "./multiply-digit-table";
import { MultiplyDigitsOperation } from "./multiply-digits-operation";
import { MultiplyNumbers } from "./multiply-numbers";
import { MultiplyRow } from "./multiply-row";
import { MultiplySignedFloats } from "./multiply-signed-floats";
import { MultiplySigns } from "./multiply-signs";
import { MultiplyUnsignedFloats } from "./multiply-unsigned-floats";
import { Negate } from "./negate";
import { NegateSignedFloat } from "./negate-signed-float";
import { Normalise } from "./normalise";
import { NormaliseForCrossMultiply } from "./normalise-for-cross-multiply";
import { NormaliseFractionalParts } from "./normalise-fractional-parts";
import { NormaliseFractionalZeros } from "./normalise-fractional-zeros";
import { NormaliseIntegerParts } from "./normalise-integer-parts";
import { NormaliseIntegerZeros } from "./normalise-integer-zeros";
import { NormaliseLengths } from "./normalise-lengths";
import { Not } from "./not";
import { NumberComponents } from "./number-components";
import { NumberPair } from "./number-pair";
import { Pad } from "./pad";
import { PadDirection } from "./pad-direction";
import { PadEnd } from "./pad-end";
import { PadStart } from "./pad-start";
import { Power } from "./power";
import { PowerRejectingFractionalExponent } from "./power-rejecting-fractional-exponent";
import { RoundFloat } from "./round-float";
import { RoundFractionalDigits } from "./round-fractional-digits";
import { RoundingCarryMap } from "./rounding-carry-map";
import { RowShift } from "./row-shift";
import { SafeDigitsToUnsignedFloat } from "./safe-digits-to-unsigned-float";
import { ScientificNotationAsDecimal } from "./scientific-notation-as-decimal";
import { SeparateSign } from "./separate-sign";
import { Sign } from "./sign";
import { SignMap } from "./sign-map";
import { SignToNumber } from "./sign-to-number";
import { SignedFloat } from "./signed-float";
import { SignedFloatToNumber } from "./signed-float-to-number";
import { SignedFloatZero } from "./signed-float-zero";
import { SmallEnoughForScientificNotation } from "./small-enough-for-scientific-notation";
import { Smaller } from "./smaller";
import { SplitAndNormalise } from "./split-and-normalise";
import { SplitComponentParts } from "./split-component-parts";
import { SplitIntoDigits } from "./split-into-digits";
import { SplitLeadingElements } from "./split-leading-elements";
import { Subtract } from "./subtract";
import { SubtractCarryDigit } from "./subtract-carry-digit";
import { SubtractCarryDigitTable } from "./subtract-carry-digit-table";
import { SubtractDigit } from "./subtract-digit";
import { SubtractDigitTable } from "./subtract-digit-table";
import { SubtractDigits } from "./subtract-digits";
import { SubtractNumbers } from "./subtract-numbers";
import { SubtractSignedFloats } from "./subtract-signed-floats";
import { SubtractUnsignedFloats } from "./subtract-unsigned-floats";
import { SubtractUnsignedIntegers } from "./subtract-unsigned-integers";
import { Subtraction } from "./subtraction";
import { TableShift } from "./table-shift";
import { TailDigitArray } from "./tail-digit-array";
import { ToDecimalString } from "./to-decimal-string";
import { ToSignedFloat } from "./to-signed-float";
import { ToSmallFractionString } from "./to-small-fraction-string";
import { ToUnsignedFloat } from "./to-unsigned-float";
import { TrimLeadingZeros } from "./trim-leading-zeros";
import { TrimTrailingZeros } from "./trim-trailing-zeros";
import { UnsignedFloat } from "./unsigned-float";
import { UnsignedFloatToNumber } from "./unsigned-float-to-number";
import { UnsignedFloatZero } from "./unsigned-float-zero";

export declare namespace Math {
  export {
    Abs,
    Add,
    AddCarryDigit,
    AddCarryDigitTable,
    AddDigit,
    AddDigitTable,
    AddDigits,
    AddDigitsOperation,
    AddNumbers,
    AddSignedFloats,
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
    GreaterThan,
    GreaterThanOrEqualTo,
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
    LessThanOrEqualTo,
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
    SmallEnoughForScientificNotation,
    Smaller,
    SplitAndNormalise,
    SplitComponentParts,
    SplitIntoDigits,
    SplitLeadingElements,
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
