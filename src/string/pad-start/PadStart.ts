import type { Fn, Length, Prepend } from "@ibnlanre/types";

export type PadStart<
  Text extends string,
  Size extends number,
  Prefix extends string = "0"
> = Length<Text> extends Size
  ? Text
  : PadStart<Prepend<Text, Prefix>, Size, Prefix>;

export interface TPadStart<
  Size extends number | void = void,
  Prefix extends string | void = "0",
  Text extends string | void = void
> extends Fn<{
    0: number;
    1: string;
    2: string;
  }> {
  slot: [Size, Prefix, Text];
  data: PadStart<this[2], this[0], this[1]>;
}
