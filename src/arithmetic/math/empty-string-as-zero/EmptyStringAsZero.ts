export type EmptyStringAsZero<Input extends string> = Input extends ""
  ? "0"
  : Input;
