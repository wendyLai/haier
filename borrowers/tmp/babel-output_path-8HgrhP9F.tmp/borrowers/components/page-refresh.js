define("borrowers/components/page-refresh", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		tagName: "li",
		actions: {
			doRefresh: function doRefresh() {
				window.location.reload(); //刷新当前页面.
				//parent.location.reload();//刷新父亲对象（用于框架）
				//opener.location.reload();//刷新父窗口对象（用于单开窗口）
				//top.location.reload();//刷新最顶端对象（用于多开窗口）
			}
		}
	});
});