import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const { beerId } = params;
    return $.getJSON(`http://api.react.beer/v2/beer/${beerId}`).then(beer => beer.data);
  }
});
