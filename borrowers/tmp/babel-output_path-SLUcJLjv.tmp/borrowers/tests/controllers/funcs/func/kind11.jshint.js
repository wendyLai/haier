define('borrowers/tests/controllers/funcs/func/kind11.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/funcs/func');
  QUnit.test('controllers/funcs/func/kind11.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/funcs/func/kind11.js should pass jshint.\ncontrollers/funcs/func/kind11.js: line 15, col 32, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind11.js: line 27, col 50, \'value\' is defined but never used.\n\n2 errors');
  });
});