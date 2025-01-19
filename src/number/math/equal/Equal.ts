export type Equal<
  Left extends number,
  Right extends number
> = Left extends Right ? (Right extends Left ? 1 : 0) : 0;
