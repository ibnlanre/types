import { FlipTable, MakeBinaryTable, MakeTable } from "..";

type FirstRow = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export type SubtractDigitTable = MakeBinaryTable<
  FlipTable<MakeTable<FirstRow>>
>;
