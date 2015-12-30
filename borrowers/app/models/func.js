import Ember from 'ember';

export default Ember.Object.extend({
	name       : '',
	name_en    : '',
	setupRows  : Ember.on('init', function() {
		if (!this.get('rows')) {
			this.set('rows', []);
		}
	}),
	func_slug : Ember.computed('name_en', function() {
		return this.get('name_en').dasherize();
	})
});
