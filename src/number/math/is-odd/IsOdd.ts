import type { IsEven } from "../is-even";
import type { Not } from "../not";

export type IsOdd<Number extends number> = Not<IsEven<Number>>;
