import type { Fn } from "@ibnlanre/types";

export type NoNumberHelper<
  Value extends string,
  Result extends string
> = Value extends `${infer Slice}${infer Substring}`
  ? `${Slice}` extends `${number}`
    ? NoNumberHelper<Substring, Result>
    : NoNumberHelper<Substring, `${Result}${Slice}`>
  : Result;

export type NoNumber<Value extends string> = NoNumberHelper<Value, "">;

export interface TNoNumber<Value extends string | void = void>
  extends Fn<{
    0: string;
  }> {
  slot: [Value];
  data: NoNumber<this[0]>;
}
