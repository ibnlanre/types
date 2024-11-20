import type { Fn } from "@ibnlanre/types";

export type ExtractRootKey<
  Text extends string,
  Delimiter extends string = "."
> = Text extends `${infer Segment}${Delimiter}${string}` ? Segment : Text;

export interface TExtractRootKey<
  Delimiter extends string | void = ".",
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: string;
  }> {
  slot: [Delimiter, Text];
  data: ExtractRootKey<this[1], this[0]>;
}
