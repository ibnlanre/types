import { CompareNumberMagnitudes, IsPositive } from "..";

export type CompareNumbers<
  Left extends number,
  Right extends number
> = IsPositive<Left> extends 1
  ? IsPositive<Right> extends 1
    ? CompareNumberMagnitudes<Left, Right>
    : 1
  : IsPositive<Right> extends 1
  ? -1
  : CompareNumberMagnitudes<Right, Left>;
