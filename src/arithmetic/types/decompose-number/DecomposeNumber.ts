import {
  EmptyStringAsZero,
  NumberComponents,
  ScientificNotationAsDecimal,
  SeparateSign,
  Sign,
  SplitComponentParts,
  TrimLeadingZeros,
  TrimTrailingZeros,
} from "..";

export type DecomposeNumber<Number extends string | number> =
  SeparateSign<`${Number}`> extends [
    infer TSign extends Sign,
    infer TValue extends string
  ]
    ? SplitComponentParts<
        ScientificNotationAsDecimal<TValue>
      > extends NumberComponents<never, infer Integer, infer Fraction>
      ? NumberComponents<
          TSign,
          EmptyStringAsZero<TrimLeadingZeros<Integer>>,
          TrimTrailingZeros<Fraction>
        >
      : never
    : never;
