define("borrowers/components/page-toggle", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		tagName: "li",
		actions: {
			listToggle: function listToggle() {
				var this_id = this.get('elementId');
				console.log(this_id);

				var this_icon = _ember["default"].$("#" + this_id + "").find(".chevron");
				var this_content = _ember["default"].$("#" + this_id + "").parent().siblings(".ivy-tab-panel.active");

				if (!_ember["default"].$("#" + this_id + "").hasClass("disabled")) {
					if (this_icon.hasClass("down")) {
						this_content.slideUp();
						this_icon.removeClass("down").addClass("up");
					} else {
						this_content.slideDown();
						this_icon.removeClass("up").addClass("down");
					}
				}
			}
		}
	});
});