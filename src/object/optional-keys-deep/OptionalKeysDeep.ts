import {
  Dictionary,
  Elements,
  Fn,
  IsPartial,
  JoinKeys,
  Keys,
  UnionToTuple,
} from "@ibnlanre/types";

type OptionalKeysDeepHelper<
  ObjectType extends Dictionary,
  Root extends string = ""
> = Elements<
  UnionToTuple<
    {
      [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 1
        ? ObjectType[Key] extends Dictionary
          ? Key | OptionalKeysDeepHelper<ObjectType[Key], Key>
          : JoinKeys<Root, Key>
        : never;
    }[Keys<ObjectType>]
  >
>;

export type OptionalKeysDeep<ObjectType extends Dictionary> =
  OptionalKeysDeepHelper<ObjectType>;

export interface TOptionalKeysDeep<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: OptionalKeysDeep<this[0]>;
}
