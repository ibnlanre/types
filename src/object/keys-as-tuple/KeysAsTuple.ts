import { Dictionary, Fn, LastOfUnion } from "@ibnlanre/types";

type KeysAsTupleHelper<
  ObjectType extends Dictionary,
  Keys extends any[] = []
> = LastOfUnion<keyof ObjectType> extends infer Key
  ? [Key] extends [never]
    ? Keys
    : Key extends keyof ObjectType
    ? KeysAsTupleHelper<Omit<ObjectType, Key>, [Key, ...Keys]>
    : never
  : Keys;

export type KeysAsTuple<ObjectType extends Dictionary> =
  KeysAsTupleHelper<ObjectType>;

export interface TKeysAsTuple<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: KeysAsTuple<this[0]>;
}
