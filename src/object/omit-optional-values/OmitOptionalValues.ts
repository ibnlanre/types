import {
  Derivatives,
  Dictionary,
  Fn,
  Indexable,
  Intersect,
  Primitives,
  RequiredKeys,
  Structures,
} from "@ibnlanre/types";

export type OmitOptionalValues<ObjectType extends Dictionary> =
  ObjectType extends Primitives | Indexable | Structures | Derivatives
    ? ObjectType
    : Intersect<{
        [K in RequiredKeys<ObjectType>]: ObjectType[K] extends infer T
          ? T extends Dictionary
            ? OmitOptionalValues<T>
            : T
          : never;
      }>;

export interface TOmitOptionalValues<
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: OmitOptionalValues<this[0]>;
}
