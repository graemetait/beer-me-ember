import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['beer'],
  imageURL: Ember.computed('beer', function() {
    const beer = this.get('beer');
    return beer.labels && beer.labels.medium || 'null.jpg';
  })
});
