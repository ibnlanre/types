import type { Dictionary, Fn, Intersect, RequiredKeys } from "@ibnlanre/types";

export type OmitOptionalValues<ObjectType extends Dictionary> =
  ObjectType extends Dictionary
    ? Intersect<{
        [K in RequiredKeys<ObjectType>]: ObjectType[K] extends infer T
          ? T extends Dictionary
            ? OmitOptionalValues<T>
            : T
          : never;
      }>
    : ObjectType;

export interface TOmitOptionalValues<
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: OmitOptionalValues<this[0]>;
}
