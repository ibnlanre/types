export type Absolute<Number extends number> = Number extends Number
  ? `${Number}` extends `-${infer Unsigned extends number}`
    ? Unsigned
    : Number
  : never;
