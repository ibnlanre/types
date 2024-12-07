import type { Dictionary, Fn, Intersect } from "@ibnlanre/types";

export type Merge<
  Source extends Dictionary,
  Target extends Dictionary
> = Intersect<
  {
    [Key in keyof Source as Key extends keyof Target
      ? never
      : Key]: Source[Key];
  } & {
    [Key in keyof Target as Key extends keyof Source
      ? never
      : Key]: Target[Key];
  } & {
    [Key in keyof Source & keyof Target]: Source[Key] extends Dictionary
      ? Target[Key] extends Dictionary
        ? Merge<Source[Key], Target[Key]>
        : Target[Key]
      : Target[Key];
  }
>;

export interface TMerge<
  Target extends Dictionary | void = void,
  Source extends Dictionary | void = void
> extends Fn<{
    0: Dictionary;
    1: Dictionary;
  }> {
  slot: [Target, Source];
  data: Merge<this[1], this[0]>;
}
