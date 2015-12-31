define('borrowers/components/input-ip', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		isread: true,
		actions: {
			valid_value: function valid_value(event) {
				var eventObj = event || e;
				var keyCode = eventObj.keyCode || eventObj.which;
				if (keyCode >= 48 && keyCode <= 57) {
					return true;
				} else {
					return false;
				}
			},
			update_value: function update_value(params) {
				//console.log(params);
				var this_index = parseInt(params) - 1; //index的值

				var this_id = this.get('elementId');
				//console.log(this_id);

				var this_input_arr = _ember['default'].$("#" + this_id + " input");
				//console.log(this_input_arr);

				if (this_input_arr.eq(this_index).val().length == 3) {
					//console.log(this_index,"--------应该跳转了----------");
					_ember['default'].$("#" + this_id + " input").eq(this_index + 1).focus();
					_ember['default'].$("#" + this_id + " input").eq(this_index + 1).select();
				}
			},
			clear_ip: function clear_ip() {
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id + " .ip_input input").val("");
			}

		}
	});
});