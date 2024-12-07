import type { IsInteger } from "../is-integer";
import type { Not } from "../not";

export type IsNonInteger<Number extends number> = Not<IsInteger<Number>>;
