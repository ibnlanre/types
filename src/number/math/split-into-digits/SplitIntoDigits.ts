import type { Digit } from "@ibnlanre/types";

export type SplitIntoDigits<Number extends string> = Number extends ""
  ? []
  : Number extends `${infer Head extends Digit}${infer Rest}`
  ? [Head, ...SplitIntoDigits<Rest>]
  : never;
