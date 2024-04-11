import { Digit } from "@ibnlanre/types";
import { TableShift } from "..";

export type MakeBinaryTable<
  Table extends Digit[][],
  Addendum extends Digit = never
> = [Table, TableShift<Table, Addendum>];
