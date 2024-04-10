import { Fn, TrimEnd, TrimStart } from "@ibnlanre/types";

export type Trim<
  Text extends string,
  Letter extends string = "0",
  Count extends number = -1
> = TrimStart<TrimEnd<Text, Letter, Count>, Letter, Count>;

export interface TTrim<
  Letter extends string | void = "0",
  Count extends number | void = -1,
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: number;
    2: string;
  }> {
  slot: [Letter, Count, Text];
  data: Trim<this[2], this[0], this[1]>;
}

type Drop<T extends any[]> = T extends [infer _, ...infer R] ? R : never;
