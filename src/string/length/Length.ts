import type { Fn, Serializable, Size, Split, Stringify } from "@ibnlanre/types";

type LengthHelper<
  Text extends Serializable,
  String extends string = Stringify<Text>,
  List extends string[] = Split<String>,
  Result extends number = Size<List>
> = Result;

export type Length<Text extends Serializable> = LengthHelper<Text>;

export interface TLength<Text extends Serializable | void = void>
  extends Fn<{
    0: Serializable;
  }> {
  slot: [Text];
  data: Length<this[0]>;
}
