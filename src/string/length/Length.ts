import { Fn, Serializable, Split, Stringify } from "@ibnlanre/types";

export type Length<Text extends Serializable> = Split<
  Stringify<Text>
>["length"];

export interface TLength<Text extends Serializable | void = void>
  extends Fn<{
    0: Serializable;
  }> {
  slot: [Text];
  data: Length<this[0]>;
}
