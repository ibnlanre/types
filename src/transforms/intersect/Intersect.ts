import { Dictionary, Fn } from "@ibnlanre/types";

export type Intersect<ObjectType extends Dictionary> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends Dictionary
    ? Intersect<ObjectType[Key]>
    : ObjectType[Key];
} & {};

export interface TIntersect<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: Intersect<this[0]>;
}
