import type {
  Dictionary,
  Elements,
  Fn,
  IsPartial,
  JoinKeys,
  Keys,
  UnionToTuple,
} from "@ibnlanre/types";

type RequiredKeysDeepHelper<
  ObjectType extends Dictionary,
  Root extends string = ""
> = Elements<
  UnionToTuple<
    {
      [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 0
        ? ObjectType[Key] extends Dictionary
          ? Key | RequiredKeysDeepHelper<ObjectType[Key], Key>
          : JoinKeys<Root, Key>
        : never;
    }[Keys<ObjectType>]
  >
>;

export type RequiredKeysDeep<ObjectType extends Dictionary> =
  RequiredKeysDeepHelper<ObjectType>;

export interface TRequiredKeysDeep<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: RequiredKeysDeep<this[0]>;
}
