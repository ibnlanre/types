import type { Dictionary, Fn, LastOfUnion } from "@ibnlanre/types";

type ValuesHelper<
  ObjectType extends Dictionary,
  Values extends any[] = []
> = LastOfUnion<keyof ObjectType> extends infer Key
  ? [Key] extends [never]
    ? Values
    : Key extends keyof ObjectType
    ? ValuesHelper<Omit<ObjectType, Key>, [ObjectType[Key], ...Values]>
    : never
  : Values;

export type Values<ObjectType extends Dictionary> = ValuesHelper<ObjectType>;

export interface TValues<ObjectType extends Dictionary | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [ObjectType];
  data: Values<this[0]>;
}
