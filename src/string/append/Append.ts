import type { Fn } from "@ibnlanre/types";

export type Append<
  Text extends string,
  Segment extends string
> = `${Text}${Segment}`;

export interface TAppend<
  Segment extends string | void = void,
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: string;
  }> {
  slot: [Segment, Text];
  data: Append<this[1], this[0]>;
}
