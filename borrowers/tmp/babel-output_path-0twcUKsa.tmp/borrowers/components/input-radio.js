define('borrowers/components/input-radio', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			radio_toggle: function radio_toggle() {
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_name = this.get('name');
				//console.log( this_name );
				var this_checked = _ember['default'].$("#" + this_id + "").find("input").attr("checked");
				//console.log( this_checked );

				_ember['default'].$("input[name=" + this_name + "]").removeAttr("checked");
				_ember['default'].$("input[name=" + this_name + "]").parent().removeClass("cur");

				_ember['default'].$("#" + this_id + "").find("input").attr("checked", true);
				_ember['default'].$("#" + this_id + "").find(".radio_box").addClass("cur");

				this.sendAction('setAction');
			}
		}
	});
});