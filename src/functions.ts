import { ExtractPropertyNamesOfType } from './objects';

/**
 * Given a type of object with methods, make some (or all) of the return values
 * "async" (i.e., returning a @pre{string} becomes returning a @pre{Promise<string>}).
 *
 * All non-function properties are excluded from the resultant type
 *
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
export type AsyncMethodReturns<
  T,
  TT = Pick<T, ExtractPropertyNamesOfType<T, (...args: any[]) => any>>
> = {
  [K in keyof TT]: TT[K] extends () => infer R
    ? () => Promise<R>
    : TT[K] extends (a: infer A) => infer R
      ? (a: A) => Promise<R>
      : TT[K] extends (a: infer A, b: infer B) => infer R
        ? (a: A, b: B) => Promise<R>
        : TT[K] extends (a: infer A, b: infer B, c: infer C) => infer R
          ? (a: A, b: B, c: C) => Promise<R>
          : TT[K] extends (
              a: infer A,
              b: infer B,
              c: infer C,
              d: infer D
            ) => infer R
            ? (a: A, b: B, c: C, d: D) => Promise<R>
            : TT[K] extends (
                a: infer A,
                b: infer B,
                c: infer C,
                d: infer D,
                e: infer E
              ) => infer R
              ? (a: A, b: B, c: C, d: D, e: E) => Promise<R>
              : never
};
