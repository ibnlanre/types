import {
  EmptyStringAsZero,
  NumComponents,
  ScientificNotationAsDecimal,
  SeparateSign,
  Sign,
  SplitComponentParts,
  TrimLeadingZeros,
  TrimTrailingZeros,
} from "..";

export type DecomposeNum<Input extends string | number> =
  SeparateSign<`${Input}`> extends [
    infer TSign extends Sign,
    infer TValue extends string
  ]
    ? SplitComponentParts<
        ScientificNotationAsDecimal<TValue>
      > extends NumComponents<never, infer Integer, infer Fraction>
      ? NumComponents<
          TSign,
          EmptyStringAsZero<TrimLeadingZeros<Integer>>,
          TrimTrailingZeros<Fraction>
        >
      : never
    : never;
