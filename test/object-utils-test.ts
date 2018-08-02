import { suite, test } from 'qunit-decorators';
import { OptionalProps, RequiredProps } from '../src';

@suite
export class ObjectUtilsTest {

  @test 'RequiredProps'(assert: Assert) {
    interface A {
      a?: number;
      b?: string;
    }
    type Arequired = RequiredProps<A, 'a'>;
    let x: Arequired = { a: 51 };
    x = { a: 22, b: 'foo' };
    assert.ok(x);
  }
  @test 'OptionalProps'(assert: Assert) {
    interface A {
      a: number;
      b: string;
    }
    type Aoptional = OptionalProps<A, 'a'>;
    let x: Aoptional = { b: '51' };
    x = { a: 22, b: 'foo' };
    assert.ok(x);
  }
}
