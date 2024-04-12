import { Digit } from "@ibnlanre/types";

export type ModResult<Remainder extends Digit[], Quotient extends Digit[]> = [
  remainder: Remainder,
  quotient: Quotient
];
