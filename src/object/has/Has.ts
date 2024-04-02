import { Dictionary, Fn, Paths } from "@ibnlanre/types";

export type Has<
  ObjectType extends Dictionary,
  Key extends string | number | symbol,
  Delimiter extends string = "."
> = Key extends Paths<ObjectType, Delimiter> ? 1 : 0;

export interface THas<
  Key extends string | number | symbol | void = void,
  Delimiter extends string | void = ".",
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: string | number | symbol;
    1: string;
    2: Dictionary;
  }> {
  slot: [Key, Delimiter, ObjectType];
  data: Has<this[2], this[0], this[1]>;
}
