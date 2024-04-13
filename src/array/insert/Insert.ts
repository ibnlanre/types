import { SliceFrom } from "../slice-from";
import { SliceTo } from "../slice-to";

export type Insert<List extends unknown[], Index extends number, Value> = [
  ...SliceTo<List, Index>,
  Value,
  ...SliceFrom<List, Index>
];

type Test = Insert<[1, 2, 3], 1, 4>; // [1, 4, 2, 3]
