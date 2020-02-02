import { Deferred } from '..';
import { suite, test } from 'qunit-decorators';

@suite
export class DeferredTests {
  @test public 'Constructor does not error'(assert: Assert) {
    const d = new Deferred<number>();
    assert.ok(d, 'instance is defined');
    assert.equal(
      typeof d.resolve,
      'function',
      'resolve property is a function'
    );
    assert.equal(typeof d.reject, 'function', 'reject property is a function');
    assert.equal(
      typeof d.promise.then,
      'function',
      'promise property looks like a promise'
    );
  }
  @test public async 'promise resolves when Deferred#resolve() is called'(
    assert: Assert
  ) {
    assert.expect(2);
    const d = new Deferred<number>();
    setTimeout(() => {
      d.resolve(42);
      assert.ok(true);
    }, 30);
    const val = await d.promise;
    assert.equal(val, 42, 'value is correct');
  }
  @test public async 'promise rejects when Deferred#reject() is called'(
    assert: Assert
  ) {
    assert.expect(3);
    const d = new Deferred<number>();
    setTimeout(() => {
      assert.ok(true);
      d.reject(-42);
    }, 30);
    try {
      await d.promise;
      assert.ok(false); // should never reach this line
    } catch (e) {
      assert.equal(e, -42, 'value is correct');
    } finally {
      assert.ok(true);
    }
  }
}
