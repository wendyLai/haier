import Ember from 'ember';

export default Ember.Controller.extend({
	itemActions_1: [ "不加密", "已加密"],
	itemActions_2: [ "穿墙模式", "穿墙模式"],
	itemActions_3: [ "11B/G/N default", "17B/G/N default"],
	itemActions_4: [ "自动", "自动"],
	itemActions_5: [ "20/40Mhz", "20/40Mhz"],
	itemActions_7: ["AES兼容","AES兼容"],
	itemActions_9: ["11B","11B"],
	selectedAction: null,
	changeitem:function(params){
		var this_value=params.value;
		var next=params.tabIndex;
		if (this_value.length===params.maxLength)
		{
			/*console.log("--------达到最大字符----------");*/
			if (next<params.length)
			{
				/*console.log("--------应该跳转了----------");*/
				params[next].focus();
				params[next].select();
			}
		}
	},
	actions: {
		update_selected: function(component, id) {
			this.set('selectedAction', id);
		}
	}
});
