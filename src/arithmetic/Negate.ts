import { Fn } from "@ibnlanre/types";
import { Negate } from "ts-arithmetic";

export interface TNegate<Predicate extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Predicate];
  data: Negate<this[0]>;
}
