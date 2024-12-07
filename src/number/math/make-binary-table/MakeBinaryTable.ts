import type { Digit } from "@ibnlanre/types";
import type { TableShift } from "../table-shift";

export type MakeBinaryTable<
  Table extends Digit[][],
  Addendum extends Digit = never
> = [Table, TableShift<Table, Addendum>];
