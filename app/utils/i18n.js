import Ember from 'ember';
import translations from '../translations/en';

var I18n = Ember.Object.extend(Ember.Evented, {
  currentLocale: 'en',
  defaultLocale: 'en',

  translate: function(key, options) {
    var string = translations.get(this.get('_translationPrefix') + key);
    Ember.assert('Missing translation: ' + this.get('_translationPrefix') + key, string);

    return this.interpolate(string, options.hash);
  },

  interpolate: function(key, hash) {
    if (typeof(hash) === 'undefined') { return key; }
    hash = hash || {};

    key = key.replace(/\{\{(.*?)\}\}/g, function(i, match) {
      return hash[match] || '';
    });

    // throw if we still have leftover {{}} in the string??

    return key;
  },

  _translationPrefix: function() {
    return this.get('currentLocale') + '.';
  }.property('currentLocale'),

  _localeChanged: function() {
    this.trigger('localeChanged');
  }.observes('currentLocale')
});

export default I18n;
