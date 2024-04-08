import { Digit } from "@ibnlanre/types";

declare type SplitIntoDigits<N extends string> = N extends ""
  ? []
  : N extends `${infer D extends Digit}${infer R}`
  ? R extends ""
    ? [D]
    : R extends `${number}`
    ? [D, ...SplitIntoDigits<R>]
    : never
  : never;
