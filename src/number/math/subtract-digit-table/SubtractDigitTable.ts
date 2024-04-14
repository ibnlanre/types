import { FlipTable } from "../flip-table";
import { MakeBinaryTable } from "../make-binary-table";
import { MakeTable } from "../make-table";

type FirstRow = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export type SubtractDigitTable = MakeBinaryTable<
  FlipTable<MakeTable<FirstRow>>
>;
