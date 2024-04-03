import {
  ArbitraryKey,
  Dictionary,
  Fn,
  Intersect,
  ObjectFromPath,
  OptionalKeys,
  Paths,
  RequiredKeys,
} from "@ibnlanre/types";

type AssignHelper<
  ObjectType extends Dictionary,
  PathType extends string,
  Key extends string,
  ValueType = never
> = PathType extends `${Key}.${infer Tail}`
  ? ObjectType[Key] extends infer ObjectType
    ? ObjectType extends Dictionary
      ? Assign<ObjectType, Tail, ValueType>
      : Assign<ObjectFromPath<Tail, ValueType>>
    : never
  : PathType extends Key
  ? ValueType
  : ObjectType[Key] extends Dictionary
  ? Assign<ObjectType[Key]>
  : ObjectType[Key];

type Setter<
  ObjectType extends Dictionary,
  PathType extends string,
  ValueType = never
> = Intersect<
  {
    [Key in RequiredKeys<ObjectType> as [ValueType] extends [never]
      ? Exclude<Key, PathType>
      : Key]: AssignHelper<ObjectType, PathType, Key, ValueType>;
  } & {
    [Key in OptionalKeys<ObjectType> as [ValueType] extends [never]
      ? Exclude<Key, PathType>
      : Key]?: AssignHelper<ObjectType, PathType, Key, ValueType>;
  }
>;

export type Assign<
  ObjectType extends Dictionary,
  PathType extends Paths<ObjectType> | ArbitraryKey = "",
  ValueType extends any = never
> = PathType extends keyof ObjectType | `${infer Head}.${string}` | ""
  ? Head extends keyof ObjectType
    ? Setter<ObjectType, PathType, ValueType>
    : Intersect<
        Setter<ObjectType, PathType, ValueType> &
          ObjectFromPath<PathType, ValueType>
      >
  : [ValueType] extends [never]
  ? Setter<ObjectType, PathType>
  : ObjectType extends Dictionary
  ? {
      [Key in keyof ObjectType | PathType]: Key extends keyof ObjectType
        ? ObjectType[Key]
        : ValueType;
    }
  : ObjectType;

export interface TAssign<
  PathType extends
    | Paths<Exclude<ObjectType, void>>
    | ArbitraryKey
    | void = void,
  ValueType extends unknown = never,
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: Paths<Exclude<ObjectType, void>> | ArbitraryKey;
    1: unknown;
    2: Dictionary;
  }> {
  slot: [PathType, ValueType, ObjectType];
  data: Assign<this[2], this[0], this[1]>;
}
