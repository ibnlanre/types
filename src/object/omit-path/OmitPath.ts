import {
  ArbitraryKey,
  Dictionary,
  Fn,
  Intersect,
  OptionalKeys,
  Paths,
  RequiredKeys,
} from "@ibnlanre/types";

type OmitPathHelper<
  ObjectType extends Dictionary,
  PathType extends string,
  Key extends string
> = ObjectType[Key] extends Dictionary
  ? PathType extends `${Key}.${infer Rest}`
    ? OmitPath<ObjectType[Key], Rest>
    : OmitPath<ObjectType[Key]>
  : ObjectType[Key];

export type OmitPath<
  ObjectType extends Dictionary,
  PathType extends Paths<ObjectType> | ArbitraryKey = ""
> = ObjectType extends Dictionary
  ? Intersect<
      {
        [Key in Exclude<RequiredKeys<ObjectType>, PathType>]: OmitPathHelper<
          ObjectType,
          PathType,
          Key
        >;
      } & {
        [Key in Exclude<OptionalKeys<ObjectType>, PathType>]?: OmitPathHelper<
          ObjectType,
          PathType,
          Key
        >;
      }
    >
  : ObjectType;

export interface TOmitPath<
  PathType extends Paths<Exclude<ObjectType, void>> | void = void,
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
  }> {
  slot: [PathType, ObjectType];
  data: OmitPath<this[1], this[0]>;
}
