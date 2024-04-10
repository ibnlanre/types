import { Fn } from "@ibnlanre/types";
import { Subtract } from "ts-arithmetic";

type TrimStartHelper<
  Text extends string,
  Letter extends string,
  Count extends number
> = Text extends `${Letter}${infer U}`
  ? TrimStart<U, Letter, Subtract<Count, 1>>
  : Text;

export type TrimStart<
  Text extends string,
  Letter extends string = "0",
  Count extends number = -1
> = Count extends -1
  ? Text extends `${Letter}${infer U}`
    ? TrimStartHelper<U, Letter, Count>
    : Text
  : Count extends 0
  ? Text
  : TrimStartHelper<Text, Letter, Count>;

export interface TTrimStart<
  Letter extends string | void = "0",
  Count extends number | void = -1,
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: number;
    2: string;
  }> {
  slot: [Letter, Count, Text];
  data: TrimStart<this[2], this[0], this[1]>;
}
