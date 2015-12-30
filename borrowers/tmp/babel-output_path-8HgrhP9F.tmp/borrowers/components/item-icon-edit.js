define('borrowers/components/item-icon-edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		showEdit: true,
		showSave: false,
		oldvalue: null,

		actions: {
			do_edit: function do_edit() {
				var this_id = this.get('elementId');
				//console.log(this_id);
				var this_input = _ember['default'].$("#" + this_id + "").children(".edit_input");
				//console.log(this_input.attr("class"));

				this_input.removeClass('transparent').attr("readOnly", false);

				var now_value = this_input.val();
				//console.log(now_value);

				this.set("showEdit", false);
				this.set("showSave", true);
				this.set("oldvalue", now_value);

				//console.log( this.get("oldvalue") );
			},
			do_save: function do_save() {
				var this_id = this.get('elementId');
				//console.log(this_id);
				var this_input = _ember['default'].$("#" + this_id + "").children(".edit_input");
				//console.log(this_input.attr("class"));

				this_input.addClass('transparent').attr("readOnly", true);

				this.set("showEdit", true);
				this.set("showSave", false);
			},
			do_cancle: function do_cancle() {
				var this_id = this.get('elementId');
				//console.log(this_id);
				var this_input = _ember['default'].$("#" + this_id + "").children(".edit_input");
				//console.log(this_input.attr("class"));

				var old_value = this.get("oldvalue");
				//console.log(old_value);

				this_input.val(old_value).addClass('transparent').attr("readOnly", true);

				this.set("showEdit", true);
				this.set("showSave", false);
			}
		}
	});
});