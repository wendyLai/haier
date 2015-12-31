import Ember from 'ember';

export default Ember.Controller.extend({
	connectiontype:1,//设置一个默认值
	isDHCP:Ember.computed('connectiontype',function(){
		if( this.get('connectiontype')===1 ){
			return true;
		}
	}),
	isPPPOE:Ember.computed('connectiontype',function(){
		if( this.get('connectiontype')===2 ){
			return true;
		}
	}),
	isstaticIP:Ember.computed('connectiontype',function(){
		if( this.get('connectiontype')===3 ){
			return true;
		}
	}),
	isrepeater:Ember.computed('connectiontype',function(){
		if( this.get('connectiontype')===4 ){
			return true;
		}
	}),
	
	itemActions_2: [ "自动连接", "手动连接", "按需连接"],
	itemActions_4: [ "桥接模式已关闭", "桥接模式已开启"],

	selectedAction: null,
	
	actions: {
		update_selected: function(component, id) {
			this.set('selectedAction', id);
		},
		radio_selected: function(){
			var connectiontype=Ember.$("#kind8_t input[name='connectiontype']").parents(".radio_box.cur").parents(".field").attr("connectiontype");
			//console.log(connectiontype);
			this.set('connectiontype',connectiontype);
		},
		toggle_password:function(){
				var this_type=Ember.$(".passwordinput.password_1 input").attr("type");
				//console.log(this_type);
				if( this_type==="text" ){
					Ember.$(".passwordinput.password_1 input").attr("type","password");
				}else if( this_type==="password" ){
					Ember.$(".passwordinput.password_1 input").attr("type","text");
				}
		}
	}
});
