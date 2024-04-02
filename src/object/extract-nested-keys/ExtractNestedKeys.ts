import { Fn } from "@ibnlanre/types";

export type ExtractNestedKeys<
  Text extends string,
  Delimiter extends string = "."
> = Text extends `${string}${Delimiter}${infer Segment}` ? Segment : Text;

export interface TExtractNestedKeys<
  Delimiter extends string | void = ".",
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: string;
  }> {
  slot: [Delimiter, Text];
  data: ExtractNestedKeys<this[1], this[0]>;
}
