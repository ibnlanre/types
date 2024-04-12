import { MakeBinaryTable } from "../make-binary-table";
import { MakeTable } from "../make-table";

type FirstRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export type AddCarryDigitTable = MakeBinaryTable<MakeTable<FirstRow, 1>, 1>;
