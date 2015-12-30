define('borrowers/tests/routes/main.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/main.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/main.js should pass jshint.');
  });
});