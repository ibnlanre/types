import type { MakeBinaryTable } from "../make-binary-table";
import type { MakeTable } from "../make-table";

type FirstRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export type AddDigitTable = MakeBinaryTable<MakeTable<FirstRow>>;
