define('borrowers/routes/funcs/func', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			return this.modelFor('funcs').findBy('func_slug', param.func_slug);
		}
	});
});