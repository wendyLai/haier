define('borrowers/routes/main/funcs/func/kind12', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind12' });
		}
	});
});