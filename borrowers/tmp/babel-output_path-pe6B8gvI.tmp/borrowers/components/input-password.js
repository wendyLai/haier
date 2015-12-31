define('borrowers/components/input-password', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			toggle_password: function toggle_password() {
				var this_id = this.get('elementId');
				var this_type = _ember['default'].$("#" + this_id + " input").attr("type");
				//console.log(this_id);
				if (this_type == "text") {
					_ember['default'].$("#" + this_id + " input").attr("type", "password");
				} else if (this_type == "password") {
					_ember['default'].$("#" + this_id + " input").attr("type", "text");
				}
			}
		}
	});
});