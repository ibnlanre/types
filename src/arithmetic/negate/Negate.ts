import { Fn } from "@ibnlanre/types";

export type Negate<Predicate extends number> = Predicate extends 0
  ? 0
  : number extends Predicate
  ? number
  : `${Predicate}` extends `-${infer Number extends number}`
  ? Number
  : `-${Predicate}` extends `${infer Number extends number}`
  ? Number
  : never;

export interface TNegate<Predicate extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Predicate];
  data: Negate<this[0]>;
}
