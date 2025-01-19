import type { Fn, Push } from "@ibnlanre/types";

type SplitHelper<
  Text extends string,
  Delimiter extends string,
  Result extends string[] = []
> = Text extends `${infer Slice}${Delimiter}${infer Rest}`
  ? SplitHelper<Rest, Delimiter, Push<Result, Slice>>
  : Text extends Delimiter
  ? Result
  : Push<Result, Text>;

export type Split<
  Text extends string,
  Delimiter extends string = ""
> = SplitHelper<Text, Delimiter>;

export interface TSplit<
  Delimiter extends string | void = void,
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: string;
  }> {
  slot: [Delimiter, Text];
  data: Split<this[1], this[0]>;
}

type Test = Split<"Hello world", "">;
