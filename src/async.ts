/**
 * A deferred represents some asynchronous work that is not yet finished, which
 * may or may not culminate in a value.
 *
 * @example
 *
 *   ```ts
 *   // The Deferred represents some work to be done
 *   const d = new Deferred<number>();
 *
 *   // in this case, we're accumulating timestamps
 *   const timestamps: Date[] = [];
 *
 *   // ever
 *   const task = setInterval(() => {
 *     timestamps.push(new Date());
 *   }, 100);
 *
 *    d.promise.then(val => {
 *    console.log('work is complete!', val)
 *   });
 *   ```
 * 
 */
export class Deferred<T = any> {
  static promiseConstructor: PromiseConstructor = Promise;
  /**
   * The eventual value that the Deferred's work will eventually calculate;
   */
  readonly promise: PromiseLike<T> = new Deferred.promiseConstructor((res, rej) => {
    const privateThis: { -readonly [K in keyof this]: this[K] } = this;
    privateThis.resolve = res;
    privateThis.reject = rej;
  });
  /**
   * Indiate the successful completion of whatever work this Deferred represents
   *
   * @param value the value that this Deferred's promise will resolve to
   * @see {Deferred.promise}
   */
  readonly resolve!: (value?: T | PromiseLike<T> | undefined) => void;
  /**
   * Indicate the unsuccessful completion (i.e., an error) of whatever work this Deferred represents
   * 
   * @param reason information about the reason for failure
   */
  readonly reject!: (reason?: any) => any;
}
