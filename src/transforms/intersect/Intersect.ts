import { Dictionary, Fn } from "@ibnlanre/types";

export type Intersect<ObjectType extends unknown> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends Dictionary
    ? Intersect<ObjectType[Key]>
    : ObjectType[Key];
} & {};

export interface TIntersect<ObjectType extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [ObjectType];
  data: Intersect<this[0]>;
}
