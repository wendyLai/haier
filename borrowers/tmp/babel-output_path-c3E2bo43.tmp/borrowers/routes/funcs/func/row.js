define('borrowers/routes/funcs/func/row', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			var func = this.modelFor('funcs.func');
			var rows = func.get('rows');
			var row = rows.findBy('row_slug', param.row_slug);
			//console.log(row);
			return row;
		}
	});
});