
export type ExtractPropertyNamesOfType<T, S> = {
  [K in keyof T]: T[K] extends S ? K : never
}[keyof T];

export type ExcludePropertyNamesOfType<T, S> = {
  [K in keyof T]: T[K] extends S ? never : K
}[keyof T];

export type ExtractPropertiesOfType<T, S> = Pick<
  T,
  ExtractPropertyNamesOfType<T, S>
>;

export type ExcludePropertiesOfType<T, S> = Pick<
  T,
  ExcludePropertyNamesOfType<T, S>
>;

export type FunctionArgs<F> = F extends (a: infer A) => any
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

// tslint:disable-next-line:ban-types
export type AsyncMethodReturns<T, TT = ExtractPropertiesOfType<T, Function>> = {
  [K in keyof TT]:
    TT[K] extends () => infer R ? () => Promise<R>
    : TT[K] extends (a: infer A) => infer R ? (a: A) => Promise<R>
    : TT[K] extends (a: infer A, b: infer B) => infer R ? (a: A, b: B) => Promise<R>
    : TT[K] extends (a: infer A, b: infer B, c: infer C) => infer R ? (a: A, b: B, c: C) => Promise<R>
    : TT[K] extends (a: infer A, b: infer B, c: infer C, d: infer D) => infer R ? (a: A, b: B, c: C, d: D) => Promise<R>
    : TT[K] extends (a: infer A, b: infer B, c: infer C, d: infer D, e: infer E) => infer R ? (a: A, b: B, c: C, d: D, e: E) => Promise<R>
    : never
};

export type ConstructorArgs<
  K extends { new (...args: any[]): any }
> = K extends { new (a: infer A): any }
  ? [A]
  : K extends { new (a: infer A, b: infer B): any }
    ? [A, B]
    : K extends { new (a: infer A, b: infer B, c: infer C): any }
      ? [A, B, C]
      : K extends { new (a: infer A, b: infer B, c: infer C, d: infer D): any }
        ? [A, B, C, D]
        : K extends {
            new (
              a: infer A,
              b: infer B,
              c: infer C,
              d: infer D,
              e: infer E
            ): any;
          }
          ? [A, B, C, D, E]
          : never;

export interface Deferred {
  resolve: FunctionArgs<ConstructorArgs<PromiseConstructor>[0]>[0];
  reject: FunctionArgs<ConstructorArgs<PromiseConstructor>[0]>[1];
}
