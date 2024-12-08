import type { Length, InferNumber, ParseInt } from "@ibnlanre/types";

import type { Divide } from "../divide";
import type { Power } from "../power";
import type { DecimalComponents } from "../decimal-components";
import type { HighestCommonFactor } from "../highest-common-factor";

type SimplifyHelper<Decimal extends number> =
  `${Decimal}` extends `${infer IntegerPart}.${infer FractionalPart}`
    ? [
        ParseInt<`${IntegerPart}${FractionalPart}`>,
        Power<10, Length<FractionalPart>>
      ]
    : never;

export type Simplify<Decimal extends number> =
  SimplifyHelper<Decimal> extends DecimalComponents<
    infer Numerator,
    infer Denominator
  >
    ? HighestCommonFactor<Numerator, Denominator> extends InferNumber<infer HCF>
      ? [Divide<Numerator, HCF>, Divide<Denominator, HCF>]
      : never
    : never;
