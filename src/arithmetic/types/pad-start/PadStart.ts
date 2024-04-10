import { Digit, Size } from "@ibnlanre/types";

export type PadStart<
  List extends Digit[],
  Length extends number = Size<List>,
  Value extends Digit = 0
> = List["length"] extends Length
  ? List
  : PadStart<[Value, ...List], Length, Value>;
