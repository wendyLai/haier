import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate() {
		this.render({ outlet: 'kind8' });
	},
	model:function(){
		/*获取数据*/
		var this_route=this.routeName;
		var this_param=this_route.split('.').get('lastObject');
		//console.log(this_param);

		var func=this.modelFor('main.funcs.func');
		var rows=func.get("rows");
		var kinds=[];
		for( var i=0;i<rows.length;i++ ){
			var row=rows[i].get("kinds");

			for( var j=0;j<row.length;j++ ){
				kinds=kinds.addObject(row[j]);
			}
		}
		//console.log(kinds);
		var kind=kinds.findBy("id",this_param);
		//console.log(kind);
		return kind;
	}
});
