import { describe, expectTypeOf, it } from "vitest";
import type { Assign } from "./Assign";

describe("Assign", () => {
  it("should return the same type if ObjectType is a primitive type", () => {
    expectTypeOf<Assign<{ a: string }>>().toMatchTypeOf<{ a: string }>();
    expectTypeOf<Assign<{ b: number }>>().toMatchTypeOf<{ b: number }>();
    expectTypeOf<Assign<{ c: boolean }>>().toMatchTypeOf<{ c: boolean }>();
  });

  it("should return the same type if ObjectType is an indexable type", () => {
    expectTypeOf<
      Assign<{
        a: [1, 2, 3];
      }>
    >().toMatchTypeOf<{
      a: [1, 2, 3];
    }>();
  });

  it("should return the same type if ObjectType is a structure type", () => {
    expectTypeOf<
      Assign<{
        b: Map<string, number>;
      }>
    >().toMatchTypeOf<{
      b: Map<string, number>;
    }>();

    expectTypeOf<
      Assign<{
        c: Set<string>;
      }>
    >().toMatchTypeOf<{
      c: Set<string>;
    }>();
  });

  it("should return the same type if ObjectType is a derivative type", () => {
    expectTypeOf<
      Assign<{
        a: Promise<string>;
      }>
    >().toMatchTypeOf<{
      a: Promise<string>;
    }>();

    expectTypeOf<
      Assign<{
        b: RegExp;
      }>
    >().toMatchTypeOf<{
      b: RegExp;
    }>();
  });

  it("should remove the PathType from the ObjectType if ValueType is not provided", () => {
    expectTypeOf<Assign<{ a: string }, "a">>().toMatchTypeOf<{}>();

    expectTypeOf<Assign<{ b: { c: number } }, "b.c">>().toMatchTypeOf<{
      b: {};
    }>();
  });

  it("should return the ObjectType with added properties if ValueType is provided", () => {
    expectTypeOf<Assign<{ a: string }, "b", number>>().toMatchTypeOf<{
      a: string;
      b: number;
    }>();

    expectTypeOf<Assign<{ b: string }, "c", { d: boolean }>>().toEqualTypeOf<{
      b: string;
      c: {
        d: boolean;
      };
    }>();
  });

  it("should create the paths in the PathType if it does not exist in ObjectType", () => {
    expectTypeOf<
      Assign<
        {
          c: {
            d: boolean;
          };
        },
        "e.f",
        [1, 2, 3]
      >
    >().toMatchTypeOf<{
      c: {
        d: boolean;
      };
      e: {
        f: [1, 2, 3];
      };
    }>();
  });

  it("should replace the value of a path if the key exists in ObjectType", () => {
    expectTypeOf<
      Assign<
        {
          a: string;
        },
        "a",
        number
      >
    >().toMatchTypeOf<{
      a: number;
    }>();

    expectTypeOf<
      Assign<
        {
          a: {
            b: {
              c: string;
            };
          };
        },
        "a.b.c",
        boolean
      >
    >().toMatchTypeOf<{
      a: {
        b: {
          c: boolean;
        };
      };
    }>();
  });

  it("should return the ObjectType if the PathType is an empty string", () => {
    expectTypeOf<Assign<{ a: string }, "", string>>().toMatchTypeOf<{
      a: string;
    }>();
  });
});
