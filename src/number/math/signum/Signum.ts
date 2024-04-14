export type Signum<Number extends number> = Number extends Number
  ? `${Number}` extends `-${number}`
    ? -1
    : Number extends 0
    ? 0
    : 1
  : never;
