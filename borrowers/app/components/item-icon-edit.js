import Ember from 'ember';

export default Ember.Component.extend({
	showEdit:true,
	showSave:false,
	oldvalue:null,

	actions:{
		do_edit:function() {
			var this_id=this.get('elementId');
			//console.log(this_id);
			var this_input=Ember.$("#"+this_id+"").children(".edit_input");
			//console.log(this_input.attr("class"));


			this_input.removeClass('transparent').attr("readOnly",false);

			var now_value=this_input.val();
			//console.log(now_value);

			this.set("showEdit",false);
			this.set("showSave",true);	
			this.set("oldvalue",now_value);

			//console.log( this.get("oldvalue") );
		},
		do_save:function() {
			var this_id=this.get('elementId');
			//console.log(this_id);
			var this_input=Ember.$("#"+this_id+"").children(".edit_input");
			//console.log(this_input.attr("class"));

			this_input.addClass('transparent').attr("readOnly",true);

			this.set("showEdit",true);
			this.set("showSave",false);	
		},
		do_cancle:function() {
			var this_id=this.get('elementId');
			//console.log(this_id);
			var this_input=Ember.$("#"+this_id+"").children(".edit_input");
			//console.log(this_input.attr("class"));
			
			var old_value=this.get("oldvalue");
			//console.log(old_value);

			this_input.val(old_value).addClass('transparent').attr("readOnly",true);

			this.set("showEdit",true);
			this.set("showSave",false);	


		}
	}
});
