QUnit.module('JSHint - components');
QUnit.test('components/input-toggle.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'components/input-toggle.js should pass jshint.\ncomponents/input-toggle.js: line 11, col 28, Expected \'===\' and instead saw \'==\'.\ncomponents/input-toggle.js: line 15, col 97, Missing semicolon.\ncomponents/input-toggle.js: line 16, col 34, Expected \'===\' and instead saw \'==\'.\ncomponents/input-toggle.js: line 20, col 97, Missing semicolon.\n\n4 errors'); 
});
