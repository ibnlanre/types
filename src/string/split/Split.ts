import type { Fn } from "@ibnlanre/types";

type SplitHelper<
  Text extends string,
  Delimiter extends string
> = Text extends `${infer T}${Delimiter}${infer U}`
  ? [T, ...SplitHelper<U, Delimiter>]
  : Text extends Delimiter
  ? []
  : [Text];

type DefaultOptions = {
  removeEmptyEntries: false;
};

type RemoveEmptyEntries<Text extends string[]> = Text extends [
  infer Head,
  ...infer Tail
]
  ? Tail extends string[]
    ? Head extends ""
      ? RemoveEmptyEntries<Tail>
      : [Head, ...RemoveEmptyEntries<Tail>]
    : never
  : Text;

export type Split<
  Text extends string,
  Delimiter extends string = "",
  Options extends {
    removeEmptyEntries?: boolean;
  } = DefaultOptions
> = Options["removeEmptyEntries"] extends true
  ? RemoveEmptyEntries<SplitHelper<Text, Delimiter>>
  : SplitHelper<Text, Delimiter>;

export interface TSplit<
  Delimiter extends string | void = void,
  Options extends {
    removeEmptyEntries?: boolean;
  } | void = DefaultOptions,
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: { removeEmptyEntries: boolean };
    2: string;
  }> {
  slot: [Delimiter, Options, Text];
  data: Split<this[2], this[0], this[1]>;
}
