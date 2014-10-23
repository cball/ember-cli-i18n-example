import Ember from 'ember';

export default Ember.Route.extend({
  observeLocale: function () {
    var i18n = this.i18n;
    i18n.on('localeChanged', function() {
      alert('your locale has changed to: ' + i18n.get('currentLocale') + ' probably re-render views or reload page');
    });
  }.on('init')
});
