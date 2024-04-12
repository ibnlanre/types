export type Abs<Number extends number> = Number extends Number
  ? `${Number}` extends `-${infer UnsignedNumber extends number}`
    ? UnsignedNumber
    : Number
  : never;
