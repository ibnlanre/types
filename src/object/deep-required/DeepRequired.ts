import type {
  ArbitraryKey,
  Dictionary,
  Fn,
  IncludeKeys,
  Intersect,
  Keys,
  OptionalKeys,
  Paths,
  RequiredKeys,
  RequireValue,
} from "@ibnlanre/types";

type DeepRequiredHelper<
  ObjectType extends Dictionary,
  PathType extends string,
  Key extends string
> = ObjectType[Key] extends Dictionary
  ? [PathType] extends [never]
    ? DeepRequired<ObjectType[Key]>
    : PathType extends `${Key}.${infer Rest}`
    ? DeepRequired<ObjectType[Key], Rest>
    : DeepRequired<ObjectType[Key], "">
  : ObjectType[Key];

export type DeepRequired<
  ObjectType extends Dictionary,
  PathType extends ArbitraryKey | Paths<ObjectType> = never
> = [PathType] extends [never]
  ? {
      [Key in Keys<ObjectType>]: RequireValue<
        DeepRequiredHelper<ObjectType, PathType, Key>
      >;
    }
  : ObjectType extends Dictionary
  ? Intersect<
      {
        [Key in Exclude<
          RequiredKeys<ObjectType>,
          PathType
        >]: DeepRequiredHelper<ObjectType, PathType, Key>;
      } & {
        [Key in Exclude<
          OptionalKeys<ObjectType>,
          PathType
        >]?: DeepRequiredHelper<ObjectType, PathType, Key>;
      } & {
        [Key in IncludeKeys<ObjectType, PathType>]: RequireValue<
          DeepRequiredHelper<ObjectType, PathType, Key>
        >;
      }
    >
  : ObjectType;

export interface TDeepRequired<
  PathType extends
    | ArbitraryKey
    | Paths<Exclude<ObjectType, void>>
    | void = void,
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: ArbitraryKey | Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
  }> {
  slot: [PathType, ObjectType];
  data: DeepRequired<this[1], this[0]>;
}
