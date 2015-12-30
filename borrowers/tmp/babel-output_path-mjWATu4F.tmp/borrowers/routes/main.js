define('borrowers/routes/main', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		afterModel: function afterModel() {
			this.transitionTo('main.funcs');
		}
	});
});