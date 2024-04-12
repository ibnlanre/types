import { FlipTable } from "../flip-table";
import { MakeBinaryTable } from "../make-binary-table";
import { MakeTable } from "../make-table";

type FirstRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export type SubtractCarryDigitTable = MakeBinaryTable<
  FlipTable<MakeTable<FirstRow, 1>>,
  1
>;
