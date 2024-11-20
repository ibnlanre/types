import { Range, Unionize } from "@ibnlanre/types";

type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToTwo = 0 | 1 | 2 | "";
type ZeroToFive = 0 | 1 | 2 | 3 | 4 | 5 | "";

export type Hour = `${ZeroToTwo}${ZeroToNine}`;
export type Minute = `${ZeroToFive}${ZeroToNine}`;
export type Second = `${ZeroToFive}${ZeroToNine}`;

type ZeroToThree = 0 | 1 | 2 | 3 | "";
export type Day = `${ZeroToTwo}${ZeroToNine}`;

type X = Unionize<Range<0, 23>>;
