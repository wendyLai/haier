import Ember from 'ember';

export default Ember.Route.extend({
	model:function(param){
		return this.modelFor('main.funcs').findBy('func_slug',param.func_slug);
	}
});
