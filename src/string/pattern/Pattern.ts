import type { Fn, Serializable } from "@ibnlanre/types";

export type Pattern<
  Text extends Serializable,
  StartsWith extends Serializable = "",
  EndsWith extends Serializable = ""
> = `${StartsWith}${Text}${EndsWith}`;

export interface TPattern<
  StartsWith extends Serializable | void = "",
  EndsWith extends Serializable | void = "",
  Text extends Serializable | void = void
> extends Fn<{
    0: Serializable;
    1: Serializable;
    2: Serializable;
  }> {
  slot: [StartsWith, EndsWith, Text];
  data: Pattern<this[2], this[0], this[1]>;
}
