import type { Digit, Merge, Symbols } from "@ibnlanre/types";

export type StartCase<T extends string> = Capitalize<Lowercase<T>>;

export type SnakeCase<T extends string> =
  T extends `${infer Start}${infer Rest}`
    ? `${Start extends Uppercase<Start>
        ? "_"
        : ""}${Lowercase<Start>}${SnakeCase<Rest>}`
    : "";

// type Test = SnakeCase<"HelloWorld">;

export type CamelCase<T extends string> =
  T extends `${infer Start}_${infer Rest}`
    ? `${Lowercase<Start>}${CamelCase<Capitalize<Rest>>}`
    : T;

export type KebabCase<T extends string> = SnakeCase<T> extends infer S
  ? S extends string
    ? S extends `_${infer Rest}`
      ? Rest
      : S
    : never
  : never;

export type PascalCase<T extends string> = Capitalize<CamelCase<T>>;

export type Uncapitalize<T extends string> =
  T extends `${infer Start}${infer Rest}` ? `${Lowercase<Start>}${Rest}` : "";

export type SwapCase<T extends string> = T extends `${infer Start}${infer Rest}`
  ? `${Start extends Uppercase<Start>
      ? Lowercase<Start>
      : Uppercase<Start>}${SwapCase<Rest>}`
  : "";

export type TitleCase<T extends string> = Capitalize<Lowercase<T>>;

export type SentenceCase<T extends string> = Capitalize<Lowercase<T>>;

export type DotCase<T extends string> = SnakeCase<T> extends infer S
  ? S extends string
    ? S extends `_${infer Rest}`
      ? `.${Rest}`
      : S
    : never
  : never;

export type PathCase<T extends string> = SnakeCase<T> extends infer S
  ? S extends string
    ? S extends `_${infer Rest}`
      ? `/${Rest}`
      : S
    : never
  : never;

export type SlashCase<T extends string> = SnakeCase<T> extends infer S
  ? S extends string
    ? S extends `_${infer Rest}`
      ? `/${Rest}`
      : S
    : never
  : never;

export type HeaderCase<T extends string> = SnakeCase<T> extends infer S
  ? S extends string
    ? S extends `_${infer Rest}`
      ? `${Uppercase<Rest>}`
      : S
    : never
  : never;

export type ConstantCase<T extends string> = Uppercase<SnakeCase<T>>;

type SpaceOutOptions = {
  match_uppercase: boolean;
  match_number: boolean;
  match_symbol: boolean;
  match_whitespace: boolean;
};

type DefaultSpaceOutOptions = {
  match_uppercase: true;
  match_number: true;
  match_symbol: true;
  match_whitespace: true;
};

type SpaceOutHelper<
  Word extends string,
  Matcher extends string,
  Sentence extends string,
  Options extends SpaceOutOptions,
  Result extends string = Word extends Matcher ? ` ${Word}` : Word
> = Lowercase<`${Result}${SpaceOut<Sentence, Options>}`>;

type SpaceOut<
  Sentence extends string,
  Options extends SpaceOutOptions
> = Sentence extends `${infer Word}${infer Rest}`
  ? Options["match_uppercase"] extends true
    ? SpaceOutHelper<Word, Uppercase<Word>, Rest, Options>
    : Options["match_number"] extends true
    ? SpaceOutHelper<Word, Digit, Rest, Options>
    : Options["match_symbol"] extends true
    ? SpaceOutHelper<Word, Symbols, Rest, Options>
    : Options["match_whitespace"] extends true
    ? SpaceOutHelper<Word, " ", Rest, Options>
    : never
  : "";

type SpaceOutWords<
  Sentence extends string,
  Options extends SpaceOutOptions = {
    match_uppercase: true;
    match_number: true;
    match_symbol: true;
    match_whitespace: true;
    preserve_uppercase: false;
    remove_whitespace: false;
    remove_number: false;
    remove_symbol: false;
  }
> = SpaceOut<Uncapitalize<Sentence>, Merge<DefaultSpaceOutOptions, Options>>;

// type Test1 = SpaceOutWords<"HelloWorlFS_D391+d">;

// export type UpperCase<T extends string> =
//   T extends `${infer Start}${infer Rest}`
//     ? `${Uppercase<Start>}${UpperCase<Rest>}`
//     : "";

// export type LowerCase<T extends string> =
//   T extends `${infer Start}${infer Rest}`
//     ? `${Lowercase<Start>}${LowerCase<Rest>}`
//     : "";

// export type Capitalize<T extends string> =
//   T extends `${infer Start}${infer Rest}` ? `${Uppercase<Start>}${Rest}` : "";

// export type CapitalCase<T extends string> = Capitalize<LowerCase<T>>;

// type LowerFirstCase<T extends string> = T extends `${infer Start}${infer Rest}`
//   ? `${Lowercase<Start>}${Rest}`
//   : "";

// type Test2 = Uncapitalize<"HelloWorld">;
