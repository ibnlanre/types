import type { FlipTable } from "../flip-table";
import type { MakeBinaryTable } from "../make-binary-table";
import type { MakeTable } from "../make-table";

type FirstRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export type SubtractCarryDigitTable = MakeBinaryTable<
  FlipTable<MakeTable<FirstRow, 1>>,
  1
>;
