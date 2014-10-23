import Ember from 'ember';

var translate = Ember.Handlebars.makeBoundHelper(function(key, options) {
  return this.i18n.translate(key, options);
});

export default translate;
