import {
  Derivatives,
  Dictionary,
  Fn,
  Indexable,
  Intersect,
  Primitives,
  Structures,
} from "@ibnlanre/types";

export type Mutable<ObjectType extends Dictionary> = ObjectType extends
  | Primitives
  | Indexable
  | Structures
  | Derivatives
  ? ObjectType
  : Intersect<{
      -readonly [K in keyof ObjectType]: ObjectType[K] extends Record<
        string,
        any
      >
        ? Mutable<ObjectType[K]>
        : ObjectType[K];
    }>;

export interface TMutable<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: Mutable<this[0]>;
}
