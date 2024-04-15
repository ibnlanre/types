export type Reflect<Input extends unknown> = Input extends unknown[]
  ? [Input]
  : Input;
