import { describe, expectTypeOf, it } from "vitest";
import type { Immutable } from "./Immutable";

describe("Immutable", () => {
  it("should make primitive types readonly", () => {
    type Input = string;
    type Expected = Readonly<string>;
    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should make arrays deeply immutable", () => {
    type Input = string[];
    type Expected = readonly Immutable<string>[];
    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should make nested arrays deeply immutable", () => {
    type Input = number[][];
    type Expected = readonly (readonly number[])[];
    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should make objects deeply immutable", () => {
    type Input = {
      name: string;
      age: number;
      address: {
        street: string;
        city: string;
      };
    };

    type Expected = {
      readonly name: string;
      readonly age: number;
      readonly address: {
        readonly street: string;
        readonly city: string;
      };
    };

    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle objects with array properties", () => {
    type Input = {
      names: string[];
      scores: number[];
      matrix: number[][];
    };

    type Expected = {
      readonly names: readonly string[];
      readonly scores: readonly number[];
      readonly matrix: readonly (readonly number[])[];
    };

    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should make Map types immutable", () => {
    type Input = Map<string, number>;
    type Expected = ReadonlyMap<string, number>;
    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should make Set types immutable", () => {
    type Input = Set<string>;
    type Expected = ReadonlySet<string>;
    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle complex nested structures", () => {
    type Input = {
      id: number;
      data: {
        items: Array<{
          name: string;
          tags: string[];
          metadata: Map<string, any>;
        }>;
        settings: Set<string>;
      };
    };

    type Expected = {
      readonly id: number;
      readonly data: {
        readonly items: readonly {
           readonly name: string;
           readonly tags: readonly string[];
           readonly metadata: ReadonlyMap<string, any>;
        }[];
        readonly settings: ReadonlySet<string>;
      };
    };

    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle functions", () => {
    type Input = {
      callback: () => void;
      handler: (event: string) => boolean;
      nested: {
        fn: (x: number) => number;
      };
    };

    type Expected = {
      readonly callback: () => void;
      readonly handler: (event: string) => boolean;
      readonly nested: {
        readonly fn: (x: number) => number;
      };
    };

    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle union types", () => {
    type Input = {
      value: string | number;
      data: Array<string | number>;
      options: Set<"a" | "b" | "c">;
    };

    type Expected = {
      readonly value: string | number;
      readonly data: readonly (string | number)[];
      readonly options: ReadonlySet<"a" | "b" | "c">;
    };

    type Result = Immutable<Input>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle empty objects and arrays", () => {
    type InputObj = {};
    type ExpectedObj = {};
    expectTypeOf<Immutable<InputObj>>().toEqualTypeOf<ExpectedObj>();

    type InputArr = [];
    type ExpectedArr = readonly [];
    expectTypeOf<Immutable<InputArr>>().toEqualTypeOf<ExpectedArr>();
  });
});
