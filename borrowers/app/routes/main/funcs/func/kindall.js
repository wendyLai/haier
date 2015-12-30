import Ember from 'ember';

export default Ember.Route.extend({
	model:function(param){
		//console.log('*****',param);
		var rows=this.modelFor('main.funcs.func').get('rows');
		var row=rows.findBy('row_slug',param.row_slug);
		var kinds=row.get('kinds');
		var kind=kinds.findBy('kind_slug',param.kind_slug);
		return kind;
	},
	afterModel:function(param){
		//console.log('*****',param.id);
		this.transitionTo('main.funcs.func.'+param.id+'');
	}
});
