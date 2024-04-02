import { ArbitraryKey, Dictionary, Fn, Keys, Paths } from "@ibnlanre/types";

export type ExcludeKeys<
  ObjectType extends Dictionary,
  PathType extends ArbitraryKey | Paths<ObjectType> = never
> = Exclude<Keys<ObjectType>, PathType>;

export interface TExcludeKeys<
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
  data: ExcludeKeys<this[1], this[0]>;
}
