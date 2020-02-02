/**
 * A deferred represents some asynchronous work that is not yet finished, which
 * may or may not culminate in a value.
 *
 * @public
 * @example
 * ```ts
 * // The Deferred represents some work to be done
 * const d = new Deferred<number>();
 *
 * // in this case, we're accumulating timestamps
 * const timestamps: Date[] = [];
 *
 * // ever
 * const task = setInterval(() => {
 *   timestamps.push(new Date());
 * }, 100);
 *
 * d.promise.then(val => {
 *  console.log('work is complete!', val)
 * });
 * ```
 */
export class Deferred<T = any> {
  /**
   * The promise constructor to use when instantiating Deferreds.
   */
  public static promiseConstructor: PromiseConstructor = Promise;
  /**
   * The eventual value that the Deferred's work will eventually calculate;
   */
  public readonly promise!: PromiseLike<T>;
  /**
   * Indiate the successful completion of whatever work this Deferred represents
   *
   * @param value - the value that this Deferred's promise will resolve to
   *
   */
  public readonly resolve!: (value?: T | PromiseLike<T>) => void;
  /**
   * Indicate the unsuccessful completion (i.e., an error) of whatever work this Deferred represents
   *
   * @param reason - information about the reason for failure
   */
  public readonly reject!: (reason?: any) => any;
  public constructor() {
    (this as any).promise = new Deferred.promiseConstructor((res, rej) => {
      (this as any).resolve = res;
      (this as any).reject = rej;
    });
  }
}
