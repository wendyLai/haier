define('borrowers/tests/controllers/funcs/func.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/funcs');
  QUnit.test('controllers/funcs/func.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/funcs/func.js should pass jshint.');
  });
});