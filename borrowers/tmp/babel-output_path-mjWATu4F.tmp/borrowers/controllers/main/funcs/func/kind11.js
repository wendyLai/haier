define("borrowers/controllers/main/funcs/func/kind11", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		itemActions_1: ["不加密", "已加密"],
		itemActions_2: ["穿墙模式", "穿墙模式"],
		itemActions_3: ["11B/G/N default", "17B/G/N default"],
		itemActions_4: ["自动", "自动"],
		itemActions_5: ["20/40Mhz", "20/40Mhz"],
		itemActions_7: ["AES兼容", "AES兼容"],
		itemActions_9: ["11B", "11B"],
		selectedAction: null,
		changeitem: function changeitem(params) {
			var this_value = params.value;
			var next = params.tabIndex;
			if (this_value.length == params.maxLength) {
				/*console.log("--------达到最大字符----------");*/
				if (next < params.length) {
					/*console.log("--------应该跳转了----------");*/
					params[next].focus();
					params[next].select();
				}
			}
		},
		actions: {
			update_selected: function update_selected(component, id, value) {
				this.set('selectedAction', id);
			}
		}
	});
});