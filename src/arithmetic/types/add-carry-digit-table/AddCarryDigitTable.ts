import { MakeBinaryTable, MakeTable } from "..";

type FirstRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export type AddCarryDigitTable = MakeBinaryTable<MakeTable<FirstRow, 1>, 1>;
