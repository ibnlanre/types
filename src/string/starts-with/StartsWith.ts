import { Fn, Serializable } from "@ibnlanre/types";

export type StartsWith<
  Text extends string,
  Segment extends Serializable
> = Text extends `${Segment}${string}` ? 1 : 0;

export interface TStartsWith<
  Segment extends Serializable | void = void,
  Text extends string | void = void
> extends Fn<{
    0: Serializable;
    1: string;
  }> {
  slot: [Segment, Text];
  data: StartsWith<this[1], this[0]>;
}
