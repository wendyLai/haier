define('borrowers/routes/funcs/func/kindall', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			//console.log('*****',param);
			var rows = this.modelFor('funcs.func').get('rows');
			var row = rows.findBy('row_slug', param.row_slug);
			var kinds = row.get('kinds');
			var kind = kinds.findBy('kind_slug', param.kind_slug);
			return kind;
		},
		afterModel: function afterModel(param) {
			//console.log('*****',param.id);
			this.transitionTo('funcs.func.' + param.id + '');
		}
	});
});