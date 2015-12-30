define('borrowers/routes/main', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		afterModel: function afterModel() {
			this.transitionTo('main.funcs');
		},
		actions: {
			didTransition: function didTransition() {
				document.title = '主界面-海尔路由器管理系统';
			}
		}
	});
});