import { Dictionary, Merge } from "@ibnlanre/types";

export type Diff<Left extends Dictionary, Right extends Dictionary> = Merge<
  Pick<Left, Exclude<keyof Left, keyof Right>>,
  Pick<Right, Exclude<keyof Right, keyof Left>>
>;
