import { ExtractPropertiesOfType } from './objects';

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
