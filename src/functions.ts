/**
 * Given a type of object with methods, make some (or all) of the return values
 * "async" (i.e., returning a `string` becomes returning a `Promise<string>`).
 *
 * All non-function properties are excluded from the resultant type
 *
 * @public
 * @example
 * ```ts
 *
 * interface User {
 *   isAdmin: boolean; // will not be included
 *   login(): boolean;
 *   resetPassword(): string;
 *   sendEmail(body: string): boolean;
 * }
 * const x: AsyncMethodReturns<User> ...; // {
 *                                        // login(): Promise<boolean>,
 *                                        // resetPassword(): Promise<string>
 *                                        // }
 * ```
 *
 */
export type AsyncMethodReturns<T, K extends keyof T = keyof T> = {
  [KK in K]: T[KK] extends (...args: any[]) => PromiseLike<any>
    ? T[KK]
    : T[KK] extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : T[KK];
};

/**
 * Extract the arguments from a function type, and emit them as a tuple
 * @beta
 *
 * @remarks
 * Supports up to five arguments, otherwise fails via emitting a `never`
 *
 * @example
 * ```ts
 * function foo(a: string, b: number): void { }
 * type FooArgs = ExtractArgs<typeof foo>; // [string, number]
 * type FooFirstArg = FooArgs[0] // string
 * ```
 */
export declare type ExtractArgs<F> = F extends (a: infer A) => any
  ? [A]
  : F extends (a: infer A, b: infer B) => any
  ? [A, B]
  : F extends (a: infer A, b: infer B, c: infer C) => any
  ? [A, B, C]
  : F extends (a: infer A, b: infer B, c: infer C, d: infer D) => any
  ? [A, B, C, D]
  : F extends (
      a: infer A,
      b: infer B,
      c: infer C,
      d: infer D,
      e: infer E
    ) => any
  ? [A, B, C, D, E]
  : never;
