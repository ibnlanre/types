import type { Add } from "../add";

export type AddThrough<List extends unknown[], Adder extends number> = {
  [Index in keyof List]: List[Index] extends number
    ? Add<List[Index], Adder>
    : never;
};
