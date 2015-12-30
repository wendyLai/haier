define('borrowers/routes/funcs/func/kind1', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind1' });
		}
	});
});