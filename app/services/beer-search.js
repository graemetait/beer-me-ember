import Ember from 'ember';

export default Ember.Service.extend({
  search(searchTerm = 'hops') {

    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers) {
      return JSON.parse(localStorageBeers);
    }

    console.log(`fetching beers with ${searchTerm}`);
    return $.getJSON(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(beers => {
        const filteredBeers = beers.data.filter(beer => !!beer.labels);
        localStorage.setItem(`search-${searchTerm}`, JSON.stringify(filteredBeers));
        return filteredBeers;
      });
  }
});
