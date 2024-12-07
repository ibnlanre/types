import type { Dictionary, Fn, Intersect, OptionalKeys } from "@ibnlanre/types";

export type OmitRequiredValues<ObjectType extends Dictionary> =
  ObjectType extends Dictionary
    ? Intersect<{
        [K in OptionalKeys<ObjectType>]: ObjectType[K] extends infer T
          ? T extends Dictionary
            ? OmitRequiredValues<T>
            : T
          : never;
      }>
    : ObjectType;

export interface TOmitRequiredValues<
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: OmitRequiredValues<this[0]>;
}
