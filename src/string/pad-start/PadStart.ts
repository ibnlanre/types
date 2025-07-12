import type {
  Fn,
  InferString,
  Length,
  Prepend,
  Serializable,
  Stringify,
} from "@ibnlanre/types";

export type PadStart<
  Text extends Serializable,
  Size extends number,
  Prefix extends string = "0"
> = Stringify<Text> extends InferString<infer TextString>
  ? Length<TextString> extends Size
    ? TextString
    : PadStart<Prepend<TextString, Prefix>, Size, Prefix>
  : never;

export interface TPadStart<
  Size extends number | void = void,
  Prefix extends string | void = "0",
  Text extends Serializable | void = void
> extends Fn<{
    0: number;
    1: string;
    2: Serializable;
  }> {
  slot: [Size, Prefix, Text];
  data: PadStart<this[2], this[0], this[1]>;
}
