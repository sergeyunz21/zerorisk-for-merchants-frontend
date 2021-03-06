import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('saq', params.saq_id).then((saq) => {
      saq.get('answers');
      saq.get('questions');
      return saq;
    });
  },

  // afterModel(saq) {
  //   saq.get('answers');
  //   saq.get('questions');
  // }
});
