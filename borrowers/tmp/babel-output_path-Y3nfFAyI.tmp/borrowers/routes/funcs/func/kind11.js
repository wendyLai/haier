define('borrowers/routes/funcs/func/kind11', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind11' });
		}
	});
});