define('borrowers/tests/models/func.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/func.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/func.js should pass jshint.');
  });
});