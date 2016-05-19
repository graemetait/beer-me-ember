import Ember from 'ember';

export default Ember.Service.extend({
  search(searchTerm = 'hops') {
    console.log(`fetching beers with ${searchTerm}`);
    return $.getJSON(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(beers => beers.data.filter(beer => !!beer.labels));
  }
});
