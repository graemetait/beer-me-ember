import Ember from 'ember';

export default Ember.Route.extend({
  beerSearch: Ember.inject.service(),
  model() {
    return this.get('beerSearch').search();
  }
});
