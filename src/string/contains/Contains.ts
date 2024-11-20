import type { Fn, Serializable } from "@ibnlanre/types";

export type Contains<
  Text extends string,
  Segment extends Serializable
> = Text extends `${string}${Segment}${string}` ? 1 : 0;

export interface TContains<
  Segment extends Serializable | void = void,
  Text extends string | void = void
> extends Fn<{
    0: Serializable;
    1: string;
  }> {
  slot: [Segment, Text];
  data: Contains<this[1], this[0]>;
}
