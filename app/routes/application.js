import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const searchTerm = params.searchTerm || 'hops';
    return $.getJSON(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(beers => beers.data.filter(beer => !!beer.labels));
  }
});
