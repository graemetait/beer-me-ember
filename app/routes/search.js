import Ember from 'ember';

export default Ember.Route.extend({
  beerSearch: Ember.inject.service(),
  model(params) {
    return this.get('beerSearch').search(params.searchTerm);
  }
});
