import type { Digit } from "@ibnlanre/types";

export type SplitLeadingElements<
  List extends Digit[],
  Element,
  Last extends Digit[] = []
> = List extends [infer Head extends Digit, ...infer Rest extends Digit[]]
  ? [Head] extends [Element]
    ? SplitLeadingElements<Rest, Element, [...Last, Head]>
    : [Last, List]
  : [Last, []];
