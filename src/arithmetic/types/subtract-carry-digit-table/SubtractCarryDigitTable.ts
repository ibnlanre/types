import { FlipTable, MakeBinaryTable, MakeTable } from "..";

type FirstRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export type SubtractCarryDigitTable = MakeBinaryTable<
  FlipTable<MakeTable<FirstRow, 1>>,
  1
>;
