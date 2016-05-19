import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', { path: '/search/:searchTerm' });
  this.route('beer', { path: '/beer/:beerId/:beerSlug' });
});

export default Router;
