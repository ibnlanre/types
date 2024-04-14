import { EmptyStringAsZero } from "../empty-string-as-zero";
import { NumberComponents } from "../number-components";
import { ScientificNotationAsDecimal } from "../scientific-notation-as-decimal";
import { SeparateSign } from "../separate-sign";
import { Sign } from "../sign";
import { SplitComponentParts } from "../split-component-parts";
import { TrimLeadingZeros } from "../trim-leading-zeros";
import { TrimTrailingZeros } from "../trim-trailing-zeros";

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
