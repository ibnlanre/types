// import { describe, expectTypeOf, it } from "vitest";
// import { TEvery } from "./Every";

// describe("TEvery", () => {
//   it("should return true if all elements in the array satisfy the condition", () => {
//     const arr: number[] = ;
//     const condition: (num: number) => boolean = (num) => num > 0;
//     [1, 2, 3, 4, 5]

//     type result = TEvery<, typeof arr> = true;

//     expectTypeOf(result).toBe(true);
//   });

//   it("should return false if any element in the array does not satisfy the condition", () => {
//     const arr: number[] = [1, 2, 3, 4, 5];
//     const condition: (num: number) => boolean = (num) => num > 3;

//     const result: TEvery<typeof condition, typeof arr> = false;

//     expectTypeOf(result).toBe(false);
//   });

//   it("should handle empty arrays", () => {
//     const arr: number[] = [];
//     const condition: (num: number) => boolean = (num) => num > 0;

//     const result: TEvery<typeof condition, typeof arr> = true;

//     expectTypeOf(result).toBe(true);
//   });

//   it("should handle arrays with a single element", () => {
//     const arr: number[] = [5];
//     const condition: (num: number) => boolean = (num) => num > 0;

//     const result: TEvery<typeof condition, typeof arr> = true;

//     expectTypeOf(result).toBe(true);
//   });

//   it("should handle arrays with multiple elements that satisfy the condition", () => {
//     const arr: number[] = [1, 2, 3, 4, 5];
//     const condition: (num: number) => boolean = (num) => num < 10;

//     const result: TEvery<typeof condition, typeof arr> = true;

//     expectTypeOf(result).toBe(true);
//   });

//   it("should handle arrays with multiple elements where some do not satisfy the condition", () => {
//     const arr: number[] = [1, 2, 3, 4, 5];
//     const condition: (num: number) => boolean = (num) => num < 5;

//     const result: TEvery<typeof condition, typeof arr> = false;

//     expectTypeOf(result).toBe(false);
//   });
// });
