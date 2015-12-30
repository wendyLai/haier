import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		didTransition: function() {
			document.title = '登录-海尔路由器管理系统';
		}
	}
});
