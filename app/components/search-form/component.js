import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleSubmit() {
      this.get('search')(this.get('q'));
    },
    search(searchTerm) {
      console.log(`searching for ${searchTerm}`);
    }
  }
});
