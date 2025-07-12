import type { Dictionary, Fn } from "@ibnlanre/types";

export type Merge<Target extends Dictionary, Source extends Dictionary> = {
  [Key in Exclude<keyof Source, keyof Target>]: Source[Key];
} & {
  [Key in Exclude<keyof Target, keyof Source>]: Target[Key];
} & {
  [Key in keyof Source & keyof Target]: Target[Key] extends Dictionary
    ? Source[Key] extends Dictionary
      ? Merge<Target[Key], Source[Key]>
      : Source[Key]
    : Source[Key];
};

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
