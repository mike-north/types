/**
 * Extract the arguments from a class constructor
 *
 * @public
 * @example
 * ```ts
 * class Foo {
 *  constructor(a: string, b: number[], c: Promise<boolean>) {}
 * }
 * const x: ConstructorArgs<typeof Foo> // [string, number[], Promise<boolean>]
 *  = ['hello world', [1, 2, 3], Promise.resolve(false) ];
 * ```
 */
export type ConstructorArgs<
  K extends new (...args: any[]) => any
> = K extends new () => any
  ? never[]
  : K extends new (a: infer A) => any
  ? [A]
  : K extends new (a: infer A, b: infer B) => any
  ? [A, B]
  : K extends new (a: infer A, b: infer B, c: infer C) => any
  ? [A, B, C]
  : K extends new (a: infer A, b: infer B, c: infer C, d: infer D) => any
  ? [A, B, C, D]
  : K extends new (
      a: infer A,
      b: infer B,
      c: infer C,
      d: infer D,
      e: infer E
    ) => any
  ? [A, B, C, D, E]
  : never;
