import { suite, test } from 'qunit-decorators';
import { OptionalProps, RequiredProps, Dict } from '../src';

@suite
export class ObjectUtilsTest {
  @test 'RequiredProps tests'(assert: Assert) {
    interface A {
      a?: number;
      b?: string;
    }
    type Arequired = RequiredProps<A, 'a'>;
    let x: Arequired = { a: 51 };
    x = { a: 22, b: 'foo' };
    assert.ok(x);
  }
  @test 'OptionalProps tests'(assert: Assert) {
    interface A {
      a: number;
      b: string;
    }
    type Aoptional = OptionalProps<A, 'a'>;
    let x: Aoptional = { b: '51' };
    x = { a: 22, b: 'foo' };
    assert.ok(x);
  }
  @test 'Dict tests'(assert: Assert) {
    interface A {
      a: number;
      b: string;
    }
    const aDict: Dict<A> = {};
    aDict.foo = { a: 22, b: 'abc' };
    assert.ok(aDict.foo);
  }
}
