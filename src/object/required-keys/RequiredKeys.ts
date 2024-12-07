import type { Dictionary, Fn, IsPartial, Keys } from "@ibnlanre/types";

export type RequiredKeys<ObjectType extends Dictionary> = {
  [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 1 ? never : Key;
}[Keys<ObjectType>];

export interface TRequiredKeys<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: RequiredKeys<this[0]>;
}
