import { Dictionary, Fn, IsPartial, Keys } from "@ibnlanre/types";

export type OptionalKeys<ObjectType extends Dictionary> = {
  [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 1 ? Key : never;
}[Keys<ObjectType>];

export interface TOptionalKeys<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: OptionalKeys<this[0]>;
}
