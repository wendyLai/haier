import Ember from "ember";

export default Ember.Component.extend({
	tagName: "li",
	actions: {
		listToggle:function (){
			var this_id=this.get('elementId');
			console.log( this_id );

			var this_icon=Ember.$("#"+this_id+"").find(".chevron");
			var this_content=Ember.$("#"+this_id+"").parent().siblings(".ivy-tab-panel.active");
			
			if( !Ember.$("#"+this_id+"").hasClass("disabled") ){
				if( this_icon.hasClass("down") ){
					this_content.slideUp();
					this_icon.removeClass("down").addClass("up");
				}else{
					this_content.slideDown();
					this_icon.removeClass("up").addClass("down");
				}
			}
		}
	}
});
