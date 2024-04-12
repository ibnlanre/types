import { Digit, LastOfUnion } from "@ibnlanre/types";
import { Add } from "../add";

export type MakeMultiplicationRow<
  Number extends Digit,
  TableRow extends number[] = [0]
> = TableRow["length"] extends 10
  ? TableRow
  : LastOfUnion<TableRow> extends infer Previous extends number
  ? MakeMultiplicationRow<Number, [...TableRow, Add<Previous, Number>]>
  : never;
