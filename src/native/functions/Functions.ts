export type Functions =
  // eslint-disable-next-line @typescript-eslint/ban-types
  | Function
  | FunctionConstructor
  | Generator
  | GeneratorFunction
  | GeneratorFunctionConstructor
  | AsyncGenerator
  | AsyncGeneratorFunction
  | AsyncGeneratorFunctionConstructor
  | Promise<any>
  | PromiseConstructor;
