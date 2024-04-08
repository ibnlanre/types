import { Digit, Math } from "@ibnlanre/types";

export type MakeBinaryTable<
  Row extends Digit[] = [],
  Addendum extends Digit = never,
  Left extends Digit[][] = Math.MakeTable<Row, Addendum>
> = [Left, Math.TableShift<Left, Addendum>];
