import { ArrayOf, Join, Template } from "@ibnlanre/types";
import { NumberComponents, SplitComponentParts } from "..";

export type ScientificNotationAsDecimal<Input extends string | number> =
  Template<Input> extends `${infer Significand extends number}e-${infer Exponent extends number}`
    ? SplitComponentParts<Significand> extends NumberComponents<
        never,
        infer Integer,
        infer Fraction
      >
      ? ArrayOf<Exponent, 0> extends [
          infer TIntZero extends 0,
          ...infer TFractionZeros extends 0[]
        ]
        ? Join<[TIntZero, ".", ...TFractionZeros, Integer, Fraction]>
        : never
      : never
    : Template<Input>;
