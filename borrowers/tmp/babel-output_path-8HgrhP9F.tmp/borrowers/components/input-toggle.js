define('borrowers/components/input-toggle', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			toggle_off_on: function toggle_off_on() {
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_html = _ember['default'].$("#" + this_id + "").find("label").html();
				//console.log( this_html );

				if (this_html == "off") {
					_ember['default'].$("#" + this_id + "").find("label").html("on");
					_ember['default'].$("#" + this_id + "").find("input").attr("checked", true);
					_ember['default'].$("#" + this_id + "").find(".toggle_box").addClass("cur");
					_ember['default'].$("#" + this_id + "").find(".toggle_span").stop().animate({ "left": "2em" }, 300);
				} else if (this_html == "on") {
					_ember['default'].$("#" + this_id + "").find("label").html("off");
					_ember['default'].$("#" + this_id + "").find("input").removeAttr("checked");
					_ember['default'].$("#" + this_id + "").find(".toggle_box").removeClass("cur");
					_ember['default'].$("#" + this_id + "").find(".toggle_span").stop().animate({ "left": "0em" }, 300);
				}
			}
		}
	});
});