import Ember from 'ember';
import slug from 'npm:slug';

export default Ember.Component.extend({
  classNames: ['beer'],
  imageURL: Ember.computed('beer', function() {
    const beer = this.get('beer');
    return beer.labels && beer.labels.medium || 'null.jpg';
  }),
  slug: Ember.computed('beer.name', function() {
    return slug(this.get('beer.name'));
  })
});
