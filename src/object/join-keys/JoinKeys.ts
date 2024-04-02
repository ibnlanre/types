import { Fn } from "@ibnlanre/types";

export type JoinKeys<
  RootKey extends string,
  Key extends string,
  Delimiter extends string = "."
> = RootKey extends "" ? Key : `${RootKey}${Delimiter}${Key}`;

export interface TJoinKeys<
  Key extends string | void = void,
  Delimiter extends string | void = ".",
  RootKey extends string | void = void
> extends Fn<{
    0: string;
    1: string;
    2: string;
  }> {
  slot: [Key, Delimiter, RootKey];
  data: JoinKeys<this[2], this[0], this[1]>;
}
