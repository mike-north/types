/**
 * Given an object type, make one or more properties non-optional
 *
 * @public
 * @example
 *
 * ```ts
 * interface Foo {
 *   a?: string;
 *   b?: boolean;
 *   c?: number[];
 * }
 *
 * const x: RequiredProps<Foo, 'a' | 'b'> = {
 *   a: 'hello world',    // now required
 *   b: true              // now required
 *   c: [1, 2, 3]         // still optional
 * };
 * ```
 */
export type RequiredProps<T, K extends keyof T> = T & { [L in K]-?: T[K] };

/**
 * Given an object type, make one or more properties optional
 *
 * @public
 * @example
 * ```ts
 * interface Foo {
 *   a: string;
 *   b: boolean;
 *   c: number[];
 * }
 *
 * const x: OptionalProps<Foo, 'c'> = {
 *   a: 'hello world',  // still required
 *   b: true            // still required
 *   c: [1, 2, 3]       // now optional
 * };
 * ```
 *
 */
export type OptionalProps<T, K extends keyof T> = { [L in K]?: T[L] } &
  { [M in Exclude<keyof T, K>]: T[M] };

/**
 * Given an object type T, return a type of property names whose values are assignable to type S
 *
 * @public
 * @example
 * ```ts
 * interface Foo {
 *   a: string;
 *   b: boolean;
 *   c: number[];
 *   d: Array<Promise<string>>;
 * }
 *
 * const stringProps: ExtractPropertyNamesOfType<Foo, string> // type: 'a'
 *   = 'a';
 *
 * const arrayProps: ExtractPropertyNamesOfType<Foo, any[]> // type: 'c' | 'd'
 *   = 'c';
 *
 * const notArrayProps: Exclude<keyof Foo, ExtractPropertyNamesOfType<Foo, any[]>> // type: 'a' | 'b'
 *   = 'a';
 * ```
 *
 *
 * @example
 * This can be very useful when used in combination with TypeScript's `Pick<T>` utility type
 * ```ts
 * interface Foo {
 *   a: string;
 *   b(): boolean;
 *   c: number[];
 *   d: Array<Promise<string>>;
 * }
 *
 * // Extract from Foo, an object containing only properties with array values
 * let x: Pick<Foo, ExtractPropertyNamesOfType<Foo, any[]>>
 *   = { c: 42, d: [] as Array<Promise<string>> };
 *
 * // Get a type with only Foo's methods
 * let fooMethods: Pick<Foo, ExtractPropertyNamesOfType<Foo, (...args: any[]) => any>>
 *   = { b() { return true; } };
 * ```
 */
export type ExtractPropertyNamesOfType<T, S> = {
  [K in keyof T]: T[K] extends S ? K : never;
}[keyof T];

/**
 * Dictionary
 * @public
 */
export interface Dict<T> {
  [k: string]: T | undefined;
}

/**
 * Extract the property names of an object type that are optional
 * @public
 * @example
 * ```ts
 * const x: OptionalPropertyOf<{ a: string; b?: number }>; // 'b'
 * ```
 *
 */
export type OptionalPropertyNamesOf<T extends object> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? never : K }[keyof T],
  undefined
>;

/**
 * Extract the property names of an object type that are required
 * @public
 * @example
 * ```ts
 * const y: RequiredPropertyOf<{ a: string; b?: number }>; // 'a'
 * ```
 */
export type RequiredPropertyNamesOf<T extends object> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? K : never }[keyof T],
  undefined
>;

/**
 * @public
 * @deprecated
 * Use of this type is not recommended
 */
export declare type DeepPartial<O> = O extends
  | string
  | Function
  | number
  | boolean
  ? O
  : {
      [K in keyof O]?: DeepPartial<O[K]>;
    };
