import {
  Fn,
  IsNever,
  LastOfUnion,
  Length,
  Locate,
  Substring,
} from "@ibnlanre/types";

type PlaceHelper<
  Text extends string,
  Segment extends string,
  Index extends number
> = `${Substring<Text, 0, Index>}${Segment}${Substring<
  Text,
  Index,
  Length<Text>
>}`;

export type Place<
  Text extends string,
  Segment extends string,
  Index extends number
> = LastOfUnion<Index> extends infer L
  ? IsNever<L> extends 1
    ? Text
    : L extends number
    ? Place<
        PlaceHelper<Text, Segment, Locate<Length<Text>, L>>,
        Segment,
        Exclude<Index, L>
      >
    : Text
  : never;

export interface TPlace<
  Segment extends string | void = void,
  Index extends number | void = void,
  Text extends string | void = void
> extends Fn<{
    0: string;
    1: number;
    2: string;
  }> {
  slot: [Segment, Index, Text];
  data: Place<this[2], this[0], this[1]>;
}
