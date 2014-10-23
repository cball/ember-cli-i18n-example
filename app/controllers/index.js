import Ember from 'ember';

export default Ember.Controller.extend({
  howCrazy: 'super!',

  actions: {
    changeFavoritesAdjective: function() {
      var adj = this.get('howCrazy') === 'super!' ? 'Insanely Amazing' : 'super!';
      this.set('howCrazy', adj);
    },

    swapLocale: function() {
      this.i18n.set('currentLocale', 'fr');
    }
  }
});
