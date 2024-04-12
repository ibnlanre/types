export type TrimLeadingZeros<Input extends string> =
  Input extends `0${infer Rest}` ? TrimLeadingZeros<Rest> : Input;
