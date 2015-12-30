define('borrowers/tests/routes/main/funcs/func.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/main/funcs');
  QUnit.test('routes/main/funcs/func.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/main/funcs/func.js should pass jshint.');
  });
});