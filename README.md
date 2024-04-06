# @ibnlanre/types

In TypeScript, the type system provides a powerful tool for developers to ensure type safety and predictability in their code. One such feature is the ability to create parameterized interfaces and types, which can be used to model complex behaviors such as function composition.

The core concept revolves around the `Fn` interface, a parameterized interface that represents a function with arguments and a return value. The `Fn` interface uses TypeScript's unknown type, which is a type-safe counterpart of the any type. The unknown type is useful in this context because when it is used in an intersection type (e.g., unknown & {}), it is replaced by the other part of the intersection.

This behavior allows for the creation of complex types that represent composed functions, where the output of one function is the input of another. By leveraging TypeScript's advanced type features, we can create type-safe representations of function composition, leading to more predictable and reliable code.

## Installation

```bash
npm install @ibnlanre/types
```

## Usage

The library provides two types of interfaces: those starting with "T" and those without the "T". The interfaces without the "T" are base interfaces that can be used as normal generics. Some of them can accept a parameterized function as an argument. On the other hand, the interfaces starting with "T" are pre-built function models that extend the `Fn` interface. These pre-built models can be used to create complex and type-safe function compositions.

The typescript playground url for the following example is [here](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwFBzgWQIZgDQrgBWDAFNdUAVAQQBNqy4rbgZgIA7eqsEtuvcgFIRgHfphxiArgBsWYaQE9O+DFADOxAJJsYyqMR58KAJQxsA5qX4BlacADGxchE7WYUEeeAAzJTckARu4Y9izsnADqzAAWuAC+cN5QECBwAEQAAsABbNJm+gD0MAokamkA3EhIxSQMxGowAIxwALwERMQAPHgFBXAAegD8cDXEdQ3NbWmAvBuApLtwABIQMNb2HmDw04A7O2l4AOz0ANp4JmaWnY0AfNhwvXCHjTcATDcAzDcALDcArDcAbDc9gBdE4MWwOJwQTpPa63PoPZ4g1AUKIwaKdAAMNxmszSsLuhxxaURoPIqPRj3S2zxNwJROx1KRyMEwjYnTSi2Wq3W8DxcKp8yWKzWRE2OzwIMulWqJTG5HqMCerXaJG6qDuA2Go3GiuVfyeeARcBecHecA+QKOpPEnUY1E6r0u+PhXzgvzgALgwOtWFtbg8Fh8Cmd9zSH2J6W+EbSf2jezSTIoNvI+H0hnZjTxIcJjXD2MaUfzsfz8cTDGTKnUWh02dzNwL9c9jW9yIYNGozFYbH5+olSClVW18oar2VybQMjkigdsKNJrNFoHGs1I1lOtHbUOZs9AE5608QTLasOYB9lYRVT0+iuhwqz20ALRPJ6vQ2U+efH6Ww0+sC29sztmrrup6BxwAAHGW5DJv6nhBtmYbRoW6TFuk8bYuBCa-v+3DELwGZZrS8Jhpm2LfKRKEUWkexUeBmZQRWqgaNoMC1q6DZwI0TZgY0kGktYgTBKEXb8k+L59gOQA).

Let's dive in! 🚀

```typescript
import {
  Map,
  Pipe,
  TAdd,
  TAppend,
  TJoin,
  TMap,
  TMultiply,
  TParseInt,
  TRange,
  TSliceTo,
  TStringify,
  TSubtraction,
  TWith,
} from "@ibnlanre/types";

type Test1 = Pipe<
  // ^? type Test1 = "🔥 HotScript 📜"
  7,
  [
    TRange<1>, // [1, 2, 3, 4, 5, 6, 7]
    TSliceTo<2>, // [1, 2]
    TWith<0, "🔥">, // ["🔥", 2]
    TWith<1, "📜">, // ["🔥", "📜"]
    TJoin<" HotScript "> // "🔥 HotScript 📜"
  ]
>;

type Test2 = Pipe<
  //  ^? type Test2 = -223
  [1, 2, 3, 4, 5],
  [
    TMap<TAdd<3>>, // [4, 5, 6, 7, 8]
    TMap<TStringify>, // ["4", "5", "6", "7", "8"]
    TMap<TAppend<"1">>, // ["41", "51", "61", "71", "81"]
    TMap<TParseInt>, // [14, 15, 16, 17, 18]
    TSubtraction // -223
  ]
>;

type Test3 = Map<TMultiply<3>, [1, 2, 3, 4]>;
//   ^? type Test3 = [3, 6, 9, 12]
```

## Other TypeScript Type Libraries

- [expect-type](https://github.com/mmkal/expect-type): Compile-time tests for types
- [hotscript](https://github.com/gvergnaud/HOTScript): Higher-order TypeScript
- [ts-calc](https://github.com/ecyrbe/ts-calc): compute with typescript type system, part of hotscript
- [ts-arithmetic]()
- ts-essentials: all essential TypeScript types in one place.
- ts-expect: Checks values in TypeScript match expectations.
- ts-toolbelt: TypeScript's largest utility library.
- type-fest: a collection of essential TypeScript types.
- type-zoo: a modest type lib usable today.
- typepark: a new type collection offering tuple manipulation and Pipe.
- typelevel-ts: a type lib by @gcanti, author of several FP libraries in TS.
- typical: a playground of type-level operations for TypeScript.
- utility-types: collection of utility types, complementing TypeScript build-in mapped types ans aliases.
- earl: Ergonomic, modern and type-safe assertion library for TypeScript
