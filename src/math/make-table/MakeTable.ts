import { Digit, Math } from "@ibnlanre/types";

type MakeTableHelper<
  Table extends Digit[][] = [],
  Addendum extends Digit = never,
  Row extends Digit[] = Math.LastRow<Table>
> = Table["length"] extends Row["length"]
  ? Table
  : MakeTableHelper<[...Table, Math.RowShift<Row, Addendum>], Addendum>;

export type MakeTable<
  Row extends Digit[] = [],
  Addendum extends Digit = never
> = MakeTableHelper<[Row], Addendum>;
