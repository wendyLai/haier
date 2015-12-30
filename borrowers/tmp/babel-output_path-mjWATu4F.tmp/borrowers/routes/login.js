define('borrowers/routes/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		actions: {
			didTransition: function didTransition() {
				document.title = '登录-海尔路由器管理系统';
			}
		}
	});
});