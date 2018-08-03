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
export type AsyncMethodReturns<T, K extends keyof T = keyof T> = {
  [KK in K]
    : T[KK] extends (...args: any[]) => PromiseLike<any> ? T[KK]
    : T[KK] extends (...args: infer A) => infer R ? (...args: A) => Promise<R>
    : T[KK]
};
