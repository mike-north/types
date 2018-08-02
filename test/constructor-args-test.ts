import { suite, test } from 'qunit-decorators';
import { ConstructorArgs } from './index';

@suite
export class ConstructorArgsTests {
  @test 'zero-argument constructor case'(assert: Assert) {
    class C {
      // tslint:disable-next-line:no-empty
      constructor() {}
    }
    const x: ConstructorArgs<typeof C> = [];
    const y: never[] = x;
    assert.ok(x);
    assert.ok(y);
  }
  @test 'one-argument constructor case'(assert: Assert) {
    class C {
      // tslint:disable-next-line:no-empty
      constructor(_a: string) {}
    }
    const x: ConstructorArgs<typeof C> = ['hello'];
    const y: [string] = x;
    assert.ok(x);
    assert.ok(y);
  }
  @test 'multi-argument constructor case'(assert: Assert) {
    class C {
      // tslint:disable-next-line:no-empty
      constructor(_a: string, _b: number[], _c: boolean) {}
    }
    const x: ConstructorArgs<typeof C> = ['hello', [42, 42], true];
    const y: [string, number[], boolean] = x;
    assert.ok(x);
    assert.ok(y);
  }

  // // Doesn't work yet due to TS limitation
  // @test 'overloaded constructor case'(assert: Assert) {
  //   class C {
  //     x!: boolean;
  //     constructor(a: string, b: number, c: boolean);
  //     constructor(a: number, b: string, c: boolean);
  //     constructor(a: any, b: any, c: any) {}
  //   }
  //   let x: ConstructorArgs<typeof C> = [41, 'hello', true];
  //   x = ['hello', 41, true];
  //   // const y: [string, number[], boolean] = x;
  //   assert.expect(0);
  // }
}
