import { Append, Fn, Length } from "@ibnlanre/types";

export type PadEnd<
  Text extends string,
  Size extends number,
  Suffix extends string = "0"
> = Length<Text> extends Size
  ? Text
  : PadEnd<Append<Text, Suffix>, Size, Suffix>;

export interface TPadEnd<
  Size extends number | void = void,
  Suffix extends string | void = "0",
  Text extends string | void = void
> extends Fn<{
    0: number;
    1: string;
    2: string;
  }> {
  slot: [Size, Suffix, Text];
  data: PadEnd<this[2], this[0], this[1]>;
}
