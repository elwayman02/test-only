import { module, test } from 'qunit';
import someFunc from 'test-only';

module('Unit | test-only', {
});

test('is true', function (assert) {
  assert.ok(someFunc());
});
