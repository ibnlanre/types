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
} from "@ibnlanre/types";

type DeepPartialHelper<
  ObjectType extends Dictionary,
  PathType extends string,
  Key extends string
> = ObjectType[Key] extends Dictionary
  ? [PathType] extends [never]
    ? DeepPartial<ObjectType[Key]>
    : PathType extends `${Key}.${infer Tail}`
    ? DeepPartial<ObjectType[Key], Tail>
    : DeepPartial<ObjectType[Key], "">
  : ObjectType[Key];

export type DeepPartial<
  ObjectType extends Dictionary,
  PathType extends ArbitraryKey | Paths<ObjectType> = never
> = [PathType] extends [never]
  ? {
      [Key in Keys<ObjectType>]?: DeepPartialHelper<ObjectType, PathType, Key>;
    }
  : ObjectType extends Dictionary
  ? Intersect<
      {
        [Key in Exclude<RequiredKeys<ObjectType>, PathType>]: DeepPartialHelper<
          ObjectType,
          PathType,
          Key
        >;
      } & {
        [Key in Exclude<
          OptionalKeys<ObjectType>,
          PathType
        >]?: DeepPartialHelper<ObjectType, PathType, Key>;
      } & {
        [Key in IncludeKeys<ObjectType, PathType>]?: DeepPartialHelper<
          ObjectType,
          PathType,
          Key
        >;
      }
    >
  : ObjectType;

export interface TDeepPartial<
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
  data: DeepPartial<this[1], this[0]>;
}
