export type Abs<Number extends number> = Number extends Number
  ? `${Number}` extends `-${infer Absolute extends number}`
    ? Absolute
    : Number
  : never;
