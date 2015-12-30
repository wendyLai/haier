define('borrowers/routes/funcs/func/kindall', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var row = rows.findBy('row_slug', param.row_slug);
			var kinds = row.get('kinds');
			console.log(kinds);
			var kind = kinds.findBy('kind_slug', param.kind_slug);

			return kind;
		},
		afterModel: function afterModel() {
			console.log('*****', this.get('id'));
			//this.transitionTo('funcs.func.'++'');
		}
	});
});