define('semantic-ui-ember/components/ui-dropdown', ['exports', 'ember', 'semantic-ui-ember/mixins/base', 'semantic-ui-ember/mixins/data-attributes'], function (exports, _ember, _semanticUiEmberMixinsBase, _semanticUiEmberMixinsDataAttributes) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], _semanticUiEmberMixinsDataAttributes['default'], {
    module: 'dropdown',
    classNames: ['ui', 'dropdown'],
    tagName: 'div',
    value: null,

    initialize: _ember['default'].on('didInsertElement', function () {
      var value = this.get('value');
      if (typeof value !== "undefined" && value !== null) {
        this.execute('set selected', value);
      }
    }),

    _onChange: function _onChange(value, text, $element) {
      this._super();
      if (value === undefined) {
        // The initial set selected doesn't have an value. This is potentially a problem
        // within the main Semantic library
        //
        // https://github.com/Semantic-Org/Semantic-UI/blob/master/src/definitions/modules/dropdown.js#L85
        value = $element.data('value');
      }
      return this.set('value', value);
    }
  });
});