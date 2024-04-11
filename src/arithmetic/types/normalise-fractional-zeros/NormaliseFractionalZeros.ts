import { Digit, TrimTail } from "@ibnlanre/types";

export type NormaliseFractionalZeros<X extends Digit[]> = TrimTail<X, 0>;
