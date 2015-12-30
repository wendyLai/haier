QUnit.module('JSHint - controllers/funcs/func');
QUnit.test('controllers/funcs/func/kind1.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'controllers/funcs/func/kind1.js should pass jshint.\ncontrollers/funcs/func/kind1.js: line 4, col 9, Expected \':\' and instead saw \'chars\'.\ncontrollers/funcs/func/kind1.js: line 4, col 15, Expected an identifier and instead saw \'=\'.\ncontrollers/funcs/func/kind1.js: line 4, col 17, Expected \'}\' to match \'{\' from line 3 and instead saw \'{\'.\ncontrollers/funcs/func/kind1.js: line 5, col 5, Expected \')\' and instead saw \'show\'.\ncontrollers/funcs/func/kind1.js: line 5, col 9, Missing semicolon.\ncontrollers/funcs/func/kind1.js: line 5, col 10, Unrecoverable syntax error. (4% scanned).\n\n7 errors'); 
});
