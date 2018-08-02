import { suite, test } from 'qunit-decorators';
import { AsyncMethodReturns } from '../src';

@suite
export class AsyncMethodReturnsTests {
  @test 'zero-argument constructor case'(assert: Assert) {
    class C {
      foo() { return ''; }
      bar() { return 61; }
    }
    const x: AsyncMethodReturns<C> = {
      foo() { return Promise.resolve(''); },
      bar() { return Promise.resolve(99); }
    };
    assert.ok(x);
  }
}
