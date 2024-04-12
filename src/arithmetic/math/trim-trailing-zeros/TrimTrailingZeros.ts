export type TrimTrailingZeros<Input extends string> =
  Input extends `${infer Rest}0` ? TrimTrailingZeros<Rest> : Input;
