import type { Fn, IsNever, LastOfUnion } from "@ibnlanre/types";

type ReplaceHelper<
  Text extends string,
  Search extends string,
  Replacement extends string
> = Text extends `${infer X}${Search}${infer U}`
  ? `${X}${Replacement}${ReplaceHelper<U, Search, Replacement>}`
  : Text;

export type Replace<
  Text extends string,
  Search extends string,
  Replacement extends string
> = LastOfUnion<Search> extends infer L
  ? IsNever<L> extends 1
    ? Text
    : L extends string
    ? Replace<
        ReplaceHelper<Text, L, Replacement>,
        Exclude<Search, L>,
        Replacement
      >
    : Text
  : never;

export interface TReplace<
  Search extends string | void = void,
  Replacement extends string | void = void,
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: string;
    2: string;
  }> {
  slot: [Search, Replacement, Text];
  data: Replace<this[2], this[0], this[1]>;
}
