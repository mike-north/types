import hello from 'mike-north-types';

QUnit.module('mike-north-types tests');

QUnit.test('hello', assert => {
  assert.equal(hello(), 'Hello from mike-north-types');
});
