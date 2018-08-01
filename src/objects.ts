
export type RequiredProps<T, K extends keyof T> = T & { [L in K]-?: T[K] };
export type OptionalProps<T, K extends keyof T> = { [L in K]?: T[L] } & { [M in Exclude<keyof T, K>]: T[M] };
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
