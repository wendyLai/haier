import Ember from "ember";

export default Ember.Component.extend({
	tagName: "li",
	actions: {
		do_refresh: function () {
			window.location.reload();//刷新当前页面
			//parent.location.reload();//刷新父亲对象（用于框架） 
			//opener.location.reload();//刷新父窗口对象（用于单开窗口） 
			//top.location.reload();//刷新最顶端对象（用于多开窗口）
		}
	}
});
