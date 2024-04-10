export type TrimTrailingZeros<S extends string> = S extends `${infer T}0`
  ? TrimTrailingZeros<T>
  : S;
