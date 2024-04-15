import { Dictionary, Fn, Get, Has, IsNever } from "@ibnlanre/types";

export type TakeFromDictionary<
  ObjectType extends Dictionary,
  Path extends unknown = never
> = IsNever<Path> extends 1
  ? ObjectType
  : Path extends PropertyKey
  ? Has<ObjectType, Path> extends 1
    ? Get<ObjectType, Exclude<Path, symbol>>
    : never
  : ObjectType;

export interface TTakeFromDictionary<
  Path extends PropertyKey | void = never,
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: PropertyKey;
    1: Dictionary;
  }> {
  slot: [Path, ObjectType];
  data: TakeFromDictionary<this[1], this[0]>;
}
