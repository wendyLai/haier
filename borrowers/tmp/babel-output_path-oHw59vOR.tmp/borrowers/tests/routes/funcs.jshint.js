define('borrowers/tests/routes/funcs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/funcs.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs.js should pass jshint.');
  });
});