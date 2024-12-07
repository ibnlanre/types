import { Multiply } from "../multiply";

export type MultiplyThrough<
  List extends unknown[],
  Multiplier extends number
> = {
  [Index in keyof List]: List[Index] extends number
    ? Multiply<List[Index], Multiplier>
    : never;
};
