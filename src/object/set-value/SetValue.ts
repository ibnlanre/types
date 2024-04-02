import {
  ArbitraryKey,
  Derivatives,
  Dictionary,
  Fn,
  Indexable,
  Intersect,
  ObjectFromPath,
  OptionalKeys,
  Paths,
  Primitives,
  RequiredKeys,
  Structures,
} from "@ibnlanre/types";

type SetValueHelper<
  ObjectType extends Dictionary,
  PathType extends string,
  Key extends string,
  ValueType = never
> = PathType extends `${Key}.${infer Tail}`
  ? ObjectType[Key] extends infer ObjectType
    ? ObjectType extends Dictionary
      ? SetValue<ObjectType, Tail, ValueType>
      : SetValue<ObjectFromPath<Tail, ValueType>>
    : never
  : PathType extends Key
  ? ValueType
  : ObjectType[Key] extends Dictionary
  ? SetValue<ObjectType[Key]>
  : ObjectType[Key];

type Setter<
  ObjectType extends Dictionary,
  PathType extends string,
  ValueType = never
> = Intersect<
  {
    [Key in RequiredKeys<ObjectType> as [ValueType] extends [never]
      ? Exclude<Key, PathType>
      : Key]: SetValueHelper<ObjectType, PathType, Key, ValueType>;
  } & {
    [Key in OptionalKeys<ObjectType> as [ValueType] extends [never]
      ? Exclude<Key, PathType>
      : Key]?: SetValueHelper<ObjectType, PathType, Key, ValueType>;
  }
>;

export type SetValue<
  ObjectType extends Dictionary,
  PathType extends Paths<ObjectType> | ArbitraryKey = "",
  ValueType extends any = never
> = ObjectType extends Primitives | Indexable | Structures | Derivatives
  ? ObjectType
  : PathType extends keyof ObjectType | `${infer Head}.${string}` | ""
  ? Head extends keyof ObjectType
    ? Setter<ObjectType, PathType, ValueType>
    : Intersect<
        Setter<ObjectType, PathType, ValueType> &
          ObjectFromPath<PathType, ValueType>
      >
  : [ValueType] extends [never]
  ? Setter<ObjectType, PathType>
  : {
      [Key in keyof ObjectType | PathType]: Key extends keyof ObjectType
        ? ObjectType[Key]
        : ValueType;
    };

export interface TSetValue<
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
  data: SetValue<this[2], this[0], this[1]>;
}
