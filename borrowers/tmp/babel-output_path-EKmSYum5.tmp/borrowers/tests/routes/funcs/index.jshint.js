define('borrowers/tests/routes/funcs/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs');
  QUnit.test('routes/funcs/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/index.js should pass jshint.');
  });
});