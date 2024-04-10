import { Head, Size } from "@ibnlanre/types";

export type CompareLengths<
  Left extends unknown[],
  Right extends unknown[]
> = Size<Left> extends Size<Right>
  ? 0
  : Size<Left> extends 0
  ? -1
  : Size<Right> extends 0
  ? 1
  : CompareLengths<Head<Left>, Head<Right>>;
