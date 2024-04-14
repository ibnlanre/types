import { Fn, Math } from "@ibnlanre/types";

export type Negate<Predicate extends number> = Math.Negate<Predicate>;

export interface TNegate<Predicate extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Predicate];
  data: Negate<this[0]>;
}
