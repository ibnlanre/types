import { IsInteger } from "../is-integer";
import { Not } from "../not";

export type IsNonInteger<Number extends number> = Not<IsInteger<Number>>;
