import { IsInteger } from "../is-integer";
import { Not } from "../not";

export type IsNotInteger<Number extends number> = Not<IsInteger<Number>>;
