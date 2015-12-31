define('toggle-switch/components/toggle-switch', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({

    classNameBindings: ['isOn:toggle-switch-is-on'],

    isOn: false,
    a11yMessage: 'Click to toggle',
    toggleMessageWhenOn: 'Yes',
    toggleMessageWhenOff: 'No',
    displayToggleMessage: false,

    actions: {
      toggle: function toggle() {
        this.toggleProperty('isOn');
        this.sendAction('action', this.get('isOn'));
      }
    }

  });
});