define('borrowers/models/row', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Object.extend({
		id: '',
		setupKinds: _ember['default'].on('init', function () {
			if (!this.get('kinds')) {
				this.set('kinds', []);
			}
		}),
		row_slug: _ember['default'].computed('id', function () {
			return this.get('id').dasherize();
		})
	});
});