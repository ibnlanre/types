import { Dictionary, Fn, Merge } from "@ibnlanre/types";

export type Diff<Left extends Dictionary, Right extends Dictionary> = Merge<
  Pick<Left, Exclude<keyof Left, keyof Right>>,
  Pick<Right, Exclude<keyof Right, keyof Left>>
>;

export interface TDiff<Right extends Dictionary, Left extends Dictionary>
  extends Fn<{
    0: Dictionary;
    1: Dictionary;
  }> {
  slot: [Right, Left];
  data: Diff<this[1], this[0]>;
}
