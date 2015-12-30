define('borrowers/tests/controllers/funcs/func/kind8.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/funcs/func');
  QUnit.test('controllers/funcs/func/kind8.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/funcs/func/kind8.js should pass jshint.\ncontrollers/funcs/func/kind8.js: line 9, col 11, Duplicate key \'isDHCP\'.\ncontrollers/funcs/func/kind8.js: line 10, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 14, col 12, Duplicate key \'isPPPOE\'.\ncontrollers/funcs/func/kind8.js: line 15, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 19, col 15, Duplicate key \'isstaticIP\'.\ncontrollers/funcs/func/kind8.js: line 20, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 24, col 15, Duplicate key \'isrepeater\'.\ncontrollers/funcs/func/kind8.js: line 25, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 47, col 32, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 49, col 38, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 48, col 21, \'$\' is not defined.\ncontrollers/funcs/func/kind8.js: line 50, col 21, \'$\' is not defined.\ncontrollers/funcs/func/kind8.js: line 36, col 50, \'value\' is defined but never used.\n\n13 errors');
  });
});