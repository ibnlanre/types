import type { Digit, Size } from "@ibnlanre/types";

import type { LastRow } from "../last-row";
import type { RowShift } from "../row-shift";

type MakeTableHelper<
  Table extends Digit[][] = [],
  Addendum extends Digit = never,
  Row extends Digit[] = LastRow<Table>
> = Size<Table> extends Size<Row>
  ? Table
  : MakeTableHelper<[...Table, RowShift<Row, Addendum>], Addendum>;

export type MakeTable<
  Row extends Digit[] = [],
  Addendum extends Digit = never
> = MakeTableHelper<[Row], Addendum>;
