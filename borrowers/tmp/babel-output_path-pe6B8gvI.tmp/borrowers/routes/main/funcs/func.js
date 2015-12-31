define('borrowers/routes/main/funcs/func', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			return this.modelFor('main.funcs').findBy('func_slug', param.func_slug);
		}
	});
});