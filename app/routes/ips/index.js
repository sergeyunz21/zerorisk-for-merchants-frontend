import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	// model() {
	// 	return this.store.findAll('entity');
	// },
	// afterModel() {
	// 	this.store.findAll('asset-ip');
	// }
});