import { Fn, TrimEnd, TrimStart } from "@ibnlanre/types";

export type Trim<
  Text extends string,
  Count extends number = -1,
  Letter extends string = "0"
> = TrimStart<TrimEnd<Text, Count, Letter>, Count, Letter>;

export interface TTrim<
  Count extends number | void = -1,
  Letter extends string | void = "0",
  Text extends string | void = void
> extends Fn<{
    0: number;
    1: string;
    2: string;
  }> {
  slot: [Count, Letter, Text];
  data: Trim<this[2], this[0], this[1]>;
}
