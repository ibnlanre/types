import { And, Bit, Fn, Not } from "@ibnlanre/types";

export type Nand<Left extends Bit, Right extends Bit> = Not<And<Left, Right>>;

export interface TNand<
  Right extends Bit | void = void,
  Left extends Bit | void = void
> extends Fn<{
    0: Bit;
  }> {
  slot: [Right, Left];
  data: Nand<this[1], this[0]>;
}
