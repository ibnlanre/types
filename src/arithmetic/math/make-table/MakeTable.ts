import { Digit } from "@ibnlanre/types";

import { LastRow } from "../last-row";
import { RowShift } from "../row-shift";

type MakeTableHelper<
  Table extends Digit[][] = [],
  Addendum extends Digit = never,
  Row extends Digit[] = LastRow<Table>
> = Table["length"] extends Row["length"]
  ? Table
  : MakeTableHelper<[...Table, RowShift<Row, Addendum>], Addendum>;

export type MakeTable<
  Row extends Digit[] = [],
  Addendum extends Digit = never
> = MakeTableHelper<[Row], Addendum>;
