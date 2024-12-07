import type { Dictionary, Fn, Get, Paths, Unionize } from "@ibnlanre/types";

type ObjectHelper<
  ObjectType extends Dictionary,
  PickType extends Dictionary<string, Paths<ObjectType>>
> = {
  [Key in keyof PickType]: Get<ObjectType, PickType[Key]>;
};

type ArrayHelper<
  ObjectType extends Dictionary,
  PickType extends Paths<ObjectType>[]
> = {
  [Key in PickType[number]]: Get<ObjectType, Key>;
};

type StringHelper<ObjectType extends Dictionary, PickType extends string> = {
  [Key in PickType]: Get<ObjectType, Key>;
};

export type Collect<
  ObjectType extends Dictionary,
  PickType extends
    | Dictionary<string, Paths<ObjectType>>
    | Paths<ObjectType>[]
    | Paths<ObjectType>
> = Unionize<
  PickType extends Paths<ObjectType>[]
    ? ArrayHelper<ObjectType, PickType>
    : PickType extends Dictionary<string, Paths<ObjectType>>
    ? ObjectHelper<ObjectType, PickType>
    : PickType extends Paths<ObjectType>
    ? StringHelper<ObjectType, PickType>
    : never
>;

export interface TCollect<
  PickType extends
    | Dictionary<string, Paths<Exclude<ObjectType, void>>>
    | Paths<Exclude<ObjectType, void>>[]
    | Paths<Exclude<ObjectType, void>>
    | void = void,
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0:
      | Dictionary<string, Paths<Exclude<ObjectType, void>>>
      | Paths<Exclude<ObjectType, void>>[]
      | Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
  }> {
  slot: [PickType, ObjectType];
  data: Collect<this[1], this[0]>;
}
