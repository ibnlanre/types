export type Negate<Number extends number> = Number extends 0
  ? 0
  : number extends Number
  ? number
  : `${Number}` extends `-${infer Number extends number}`
  ? Number
  : `-${Number}` extends `${infer Number extends number}`
  ? Number
  : never;
