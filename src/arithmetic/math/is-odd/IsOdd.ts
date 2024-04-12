import { IsEven } from "../is-even";
import { Not } from "../not";

export type IsOdd<Number extends number> = Not<IsEven<Number>>;
