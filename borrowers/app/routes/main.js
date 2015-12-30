import Ember from 'ember';

export default Ember.Route.extend({
	afterModel:function() {
		this.transitionTo('main.funcs');
	},
	actions: {
		didTransition: function() {
			document.title = '主界面-海尔路由器管理系统';
		},
	}
});