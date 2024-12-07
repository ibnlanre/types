import type { EmptyStringAsZero } from "../empty-string-as-zero";
import type { NumberComponents } from "../number-components";
import type { ScientificNotationAsDecimal } from "../scientific-notation-as-decimal";
import type { SeparateSign } from "../separate-sign";
import type { Sign } from "../sign";
import type { SplitComponentParts } from "../split-component-parts";
import type { TrimLeadingZeros } from "../trim-leading-zeros";
import type { TrimTrailingZeros } from "../trim-trailing-zeros";

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
