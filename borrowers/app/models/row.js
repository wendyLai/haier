import Ember from 'ember';

export default Ember.Object.extend({
	id         : '',
	setupKinds : Ember.on('init', function() {
		if (!this.get('kinds')) {
			this.set('kinds', []);
		}
	}),
	row_slug  : Ember.computed('id', function() {
		return this.get('id').dasherize();
	})
});
