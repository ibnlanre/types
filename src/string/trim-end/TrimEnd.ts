import type { Fn, Subtract } from "@ibnlanre/types";

type TrimEndHelper<
  Text extends string,
  Letter extends string,
  Count extends number
> = Text extends `${infer U}${Letter}`
  ? TrimEnd<U, Letter, Subtract<Count, 1>>
  : Text;

export type TrimEnd<
  Text extends string,
  Letter extends string = "0",
  Count extends number = -1
> = Count extends -1
  ? Text extends `${infer U}${Letter}`
    ? TrimEndHelper<U, Letter, Count>
    : Text
  : Count extends 0
  ? Text
  : TrimEndHelper<Text, Letter, Count>;

export interface TTrimEnd<
  Letter extends string | void = "0",
  Count extends number | void = -1,
  Text extends string | void = void
> extends Fn {
  slot: [Letter, Count, Text];
  data: TrimEnd<this[2], this[0], this[1]>;
}
