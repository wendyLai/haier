define('semantic-ui-ember/components/ui-nag', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'nag',
    classNames: ['ui', 'nag'],
    attributeBindings: ['storageMethod', 'key', 'expires', 'domain', 'path', 'value'],

    init: function init() {
      this._super();
      this.execute('show');
    }
  });
});