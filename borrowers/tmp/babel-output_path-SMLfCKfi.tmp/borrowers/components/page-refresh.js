define("borrowers/components/page-refresh", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		tagName: "li",
		actions: {
			doRefresh: function doRefresh() {
				this.get("controller").get("target.router").refresh();
			},
			listToggle: function listToggle() {
				var now_element_id = _ember["default"].$(this).attr("elementId");
				var now_icon = _ember["default"].$("#" + now_element_id + "").find(".chevron");
				var now_content = _ember["default"].$("#" + now_element_id + "").parent().siblings(".ivy-tab-panel");

				if (!_ember["default"].$("#" + now_element_id + "").hasClass("disabled")) {
					if (now_icon.hasClass("down")) {
						now_content.slideUp();
						now_icon.removeClass("down").addClass("up");
					} else {
						now_content.slideDown();
						now_icon.removeClass("up").addClass("down");
					}
				}
			}
		}
	});
});