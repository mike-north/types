// eslint-disable-next-line import/no-unresolved
import { DeepPartial } from '@mike-north/types';

function makeDeepPartial<T>(arg: T): DeepPartial<T> {
  return {} as any;
}
const val = 3231 as 3231;
makeDeepPartial({ a: 1, b: 'abc' }); // $ExpectType { a?: number | undefined; b?: string | undefined; }
makeDeepPartial({ a: val, b: 'abc' }); // $ExpectType { a?: 3231 | undefined; b?: string | undefined; }
