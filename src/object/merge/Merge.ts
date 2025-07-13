import type { Dictionary, Fn, Intersect } from "@ibnlanre/types";

type MergeHelper<
  Target extends Dictionary,
  Source extends Dictionary
> = Intersect<
  Pick<Source, Exclude<keyof Source, keyof Target>> &
    Pick<Target, Exclude<keyof Target, keyof Source>> & {
      [Key in keyof Source & keyof Target]: Merge<Target[Key], Source[Key]>;
    }
>;

export type Merge<Target, Source> = Target extends Dictionary
  ? Source extends Dictionary
    ? MergeHelper<Target, Source>
    : Source
  : Source;

export interface TMerge<
  Target extends Dictionary | void = void,
  Source extends Dictionary | void = void
> extends Fn<{
    0: Dictionary;
    1: Dictionary;
  }> {
  slot: [Source, Target];
  data: Merge<this[1], this[0]>;
}
