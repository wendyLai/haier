define('borrowers/controllers/funcs/func/kind8', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		isDHCP: false,
		isPPPOE: false,
		isstaticIP: false,
		isrepeater: false,
		connectiontype: 1, //设置一个默认值
		isDHCP: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 1) {
				return true;
			}
		}),
		isPPPOE: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 2) {
				return true;
			}
		}),
		isstaticIP: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 3) {
				return true;
			}
		}),
		isrepeater: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 4) {
				return true;
			}
		}),

		itemActions_2: ["自动连接", "手动连接", "按需连接"],
		itemActions_4: ["桥接模式已关闭", "桥接模式已开启"],

		selectedAction: null,

		actions: {
			update_selected: function update_selected(component, id, value) {
				this.set('selectedAction', id);
			},
			radio_selected: function radio_selected() {
				var connectiontype = _ember['default'].$("#kind8_t input[name='connectiontype']").parents(".radio_box.cur").parents(".field").attr("connectiontype");
				//console.log(connectiontype);
				this.set('connectiontype', connectiontype);
			},
			toggle_password: function toggle_password() {
				var this_type = _ember['default'].$(".passwordinput.password_1 input").attr("type");
				//console.log(this_type);
				if (this_type == "text") {
					$(".passwordinput.password_1 input").attr("type", "password");
				} else if (this_type == "password") {
					$(".passwordinput.password_1 input").attr("type", "text");
				}
			}
		}
	});
});