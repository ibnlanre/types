import type {
  Append,
  Fn,
  InferString,
  Length,
  Serializable,
  Stringify,
} from "@ibnlanre/types";

export type PadEnd<
  Text extends Serializable,
  Size extends number,
  Suffix extends string = "0"
> = Stringify<Text> extends InferString<infer TextString>
  ? Length<TextString> extends Size
    ? TextString
    : PadEnd<Append<TextString, Suffix>, Size, Suffix>
  : never;

export interface TPadEnd<
  Size extends number | void = void,
  Suffix extends string | void = "0",
  Text extends Serializable | void = void
> extends Fn<{
    0: number;
    1: string;
    2: Serializable;
  }> {
  slot: [Size, Suffix, Text];
  data: PadEnd<this[2], this[0], this[1]>;
}
