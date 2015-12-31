define('borrowers/tests/unit/models/func-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/func-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/func-test.js should pass jshint.');
  });
});