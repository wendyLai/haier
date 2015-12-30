define('borrowers/models/func', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Object.extend({
		name: '',
		name_en: '',
		setupRows: _ember['default'].on('init', function () {
			if (!this.get('rows')) {
				this.set('rows', []);
			}
		}),
		func_slug: _ember['default'].computed('name_en', function () {
			return this.get('name_en').dasherize();
		})
	});
});