define('borrowers/tests/components/ip-input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/ip-input.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ip-input.js should pass jshint.\ncomponents/ip-input.js: line 13, col 32, Expected \'===\' and instead saw \'==\'.\ncomponents/ip-input.js: line 31, col 39, Missing semicolon.\n\n2 errors');
  });
});