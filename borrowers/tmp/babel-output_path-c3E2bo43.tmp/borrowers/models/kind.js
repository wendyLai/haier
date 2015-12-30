define('borrowers/models/kind', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Object.extend({
		id: '',
		name: '',
		kind_slug: _ember['default'].computed('id', function () {
			return this.get('id').dasherize();
		})
	});
});