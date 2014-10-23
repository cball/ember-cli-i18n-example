import I18n from '../utils/i18n';

export var initialize = function(container, application) {
  application.register('util:i18n', I18n);
  application.inject('route', 'i18n', 'util:i18n');
  application.inject('controller', 'i18n', 'util:i18n');
  application.inject('component', 'i18n', 'util:i18n');
  application.inject('helper', 'i18n', 'util:i18n');
};

export default {
  name: 'i18n-setup.js',

  initialize: initialize
};
