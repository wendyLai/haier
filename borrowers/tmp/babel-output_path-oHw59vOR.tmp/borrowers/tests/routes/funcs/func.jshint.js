define('borrowers/tests/routes/funcs/func.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs');
  QUnit.test('routes/funcs/func.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func.js should pass jshint.');
  });
});