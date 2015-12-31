import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		toggle_password:function(){
			var this_id=this.get('elementId');
			var this_type=Ember.$("#"+this_id+" input").attr("type");
			//console.log(this_id);
			if( this_type==="text" ){
				Ember.$("#"+this_id+" input").attr("type","password");
			}else if( this_type==="password" ){
				Ember.$("#"+this_id+" input").attr("type","text");
			}
		}
	}
});
