import { Digit, Size } from "@ibnlanre/types";

export type PadEnd<
  List extends Digit[],
  Length extends number = Size<List>,
  Value extends Digit = 0
> = Size<List> extends Length ? List : PadEnd<[...List, Value], Length, Value>;
