import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(searchTerm) {
      console.log(`searching for ${searchTerm}`);
      this.transitionTo('search', searchTerm);
    }
  }
});
