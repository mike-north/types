/**
 * Test whether an argument is non-undefined
 * @param arg - argument to test
 * @returns
 *
 * @public
 */
export function isDefined<T>(arg: T | undefined): arg is T {
  return typeof arg !== 'undefined';
}
/**
 * Test whether an argument is non-null
 * @param arg - argument to test
 * @returns
 *
 * @public
 */
export function isNonNull<T>(arg: T | null): arg is T {
  return arg !== null;
}
/**
 * Test whether an argument is neither null, nor undefined
 * @param arg - argument to test
 * @returns
 *
 * @public
 */
export function isPresent<T>(arg: T | null | undefined): arg is T {
  return !isDefined(arg) && !isNonNull(arg);
}
