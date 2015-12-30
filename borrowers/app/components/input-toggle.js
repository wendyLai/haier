import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		toggle_off_on:function(){
			var this_id=this.get('elementId');
			//console.log( this_id );
			var this_html=Ember.$("#"+this_id+"").find("label").html();
			//console.log( this_html );
			
			if( this_html=="off" ){
				Ember.$("#"+this_id+"").find("label").html("on");
				Ember.$("#"+this_id+"").find("input").attr("checked",true);
				Ember.$("#"+this_id+"").find(".toggle_box").addClass("cur");
				Ember.$("#"+this_id+"").find(".toggle_span").stop().animate({"left":"2em"}, 300)
			}else if( this_html=="on" ){
				Ember.$("#"+this_id+"").find("label").html("off");
				Ember.$("#"+this_id+"").find("input").removeAttr("checked");
				Ember.$("#"+this_id+"").find(".toggle_box").removeClass("cur");
				Ember.$("#"+this_id+"").find(".toggle_span").stop().animate({"left":"0em"}, 300)
			}
		}
	}
});
