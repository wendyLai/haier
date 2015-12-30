import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		radio_toggle:function(){
			var this_id=this.get('elementId');
			//console.log( this_id );
			var this_name=this.get('name');
			//console.log( this_name );
			var this_checked=Ember.$("#"+this_id+"").find("input").attr("checked");
			//console.log( this_checked );
			
			Ember.$("input[name="+this_name+"]").removeAttr("checked");
			Ember.$("input[name="+this_name+"]").parent().removeClass("cur");

			Ember.$("#"+this_id+"").find("input").attr("checked",true);
			Ember.$("#"+this_id+"").find(".radio_box").addClass("cur");

			this.sendAction('setAction');
		}
	}
});
