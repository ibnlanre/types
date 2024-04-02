import { describe, expectTypeOf, it } from "vitest";
import { SetValue } from "./SetValue";

describe("SetValue", () => {
  it("should return the same type if ObjectType is a primitive type", () => {
    expectTypeOf<SetValue<{ a: string }>>().toMatchTypeOf<{ a: string }>();
    expectTypeOf<SetValue<{ b: number }>>().toMatchTypeOf<{ b: number }>();
    expectTypeOf<SetValue<{ c: boolean }>>().toMatchTypeOf<{ c: boolean }>();
  });

  it("should return the same type if ObjectType is an indexable type", () => {
    expectTypeOf<
      SetValue<{
        a: [1, 2, 3];
      }>
    >().toMatchTypeOf<{
      a: [1, 2, 3];
    }>();
  });

  it("should return the same type if ObjectType is a structure type", () => {
    expectTypeOf<
      SetValue<{
        b: Map<string, number>;
      }>
    >().toMatchTypeOf<{
      b: Map<string, number>;
    }>();

    expectTypeOf<
      SetValue<{
        c: Set<string>;
      }>
    >().toMatchTypeOf<{
      c: Set<string>;
    }>();
  });

  it("should return the same type if ObjectType is a derivative type", () => {
    expectTypeOf<
      SetValue<{
        a: Promise<string>;
      }>
    >().toMatchTypeOf<{
      a: Promise<string>;
    }>();

    expectTypeOf<
      SetValue<{
        b: RegExp;
      }>
    >().toMatchTypeOf<{
      b: RegExp;
    }>();
  });

  it("should remove the PathType from the ObjectType if ValueType is not provided", () => {
    expectTypeOf<SetValue<{ a: string }, "a">>().toMatchTypeOf<{}>();

    expectTypeOf<SetValue<{ b: { c: number } }, "b.c">>().toMatchTypeOf<{
      b: {};
    }>();
  });

  it("should return the ObjectType with added properties if ValueType is provided", () => {
    expectTypeOf<SetValue<{ a: string }, "b", number>>().toMatchTypeOf<{
      a: string;
      b: number;
    }>();

    expectTypeOf<SetValue<{ b: string }, "c", { d: boolean }>>().toEqualTypeOf<{
      b: string;
      c: {
        d: boolean;
      };
    }>();
  });

  it("should create the paths in the PathType if it does not exist in ObjectType", () => {
    expectTypeOf<
      SetValue<
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
      SetValue<
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
      SetValue<
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
    expectTypeOf<SetValue<{ a: string }, "", string>>().toMatchTypeOf<{
      a: string;
    }>();
  });
});
