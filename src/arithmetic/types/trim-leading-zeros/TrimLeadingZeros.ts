export type TrimLeadingZeros<S extends string> = S extends `0${infer T}`
  ? TrimLeadingZeros<T>
  : S;
