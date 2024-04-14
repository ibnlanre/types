import { Size } from "@ibnlanre/types";
import { ComparisonResult } from "../comparison-result";

type FirstRow = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0];

type LastRow<Table extends ComparisonResult[][]> = Table extends [
  ...ComparisonResult[][],
  infer LastRow
]
  ? LastRow
  : never;

type FlipTable<T extends ComparisonResult[][]> = T extends [
  ...infer Head extends ComparisonResult[][],
  infer Tail extends ComparisonResult[]
]
  ? [Tail, ...FlipTable<Head>]
  : [];

type MakeTableHelper<
  Table extends ComparisonResult[][] = [],
  Addendum extends ComparisonResult = never,
  Row extends ComparisonResult[] = LastRow<Table>
> = Size<Table> extends Size<Row>
  ? Table
  : MakeTableHelper<[...Table, RowShift<Row, Addendum>], Addendum>;

type RowShift<
  TableRow extends ComparisonResult[],
  Addendum extends ComparisonResult = never
> = TableRow extends [
  infer Head extends ComparisonResult,
  ...infer Rest extends ComparisonResult[]
]
  ? [...Rest, [Addendum] extends [never] ? Head : Addendum]
  : never;

type MakeTable<
  Row extends ComparisonResult[] = FirstRow,
  Addendum extends ComparisonResult = -1
> = MakeTableHelper<[Row], Addendum>;

export type CompareDigitTable = FlipTable<MakeTable>;
