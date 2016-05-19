import Ember from 'ember';

export default Ember.Component.extend({
  numBeers: 10,

  actions: {
    incrementBeers() {
      this.set('numBeers', this.get('numBeers') + 1);
    }
  }
});
