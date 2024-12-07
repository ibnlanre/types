import type { Dictionary, Fn, UnionToTuple } from "@ibnlanre/types";

export type ToEntries<ObjectType extends Dictionary> = UnionToTuple<
  {
    [Key in keyof ObjectType]: [Key, ObjectType[Key]];
  }[keyof ObjectType]
>;

export interface TToEntries<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: ToEntries<this[0]>;
}
