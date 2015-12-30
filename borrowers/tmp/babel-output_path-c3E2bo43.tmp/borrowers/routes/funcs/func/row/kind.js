define('borrowers/routes/funcs/func/row/kind', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			var row = this.modelFor('funcs.func.row');
			var kinds = row.get('kinds');
			var kind = kinds.findBy('kind_slug', param.kind_slug);
			console.log(kind);
			return kind;
		}
	});
});