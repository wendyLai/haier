define('ember-cli-password-toggle/components/password-toggle', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    var $ = _ember['default'].$;

    exports['default'] = _ember['default'].Component.extend({
        didInsertElement: function didInsertElement() {
            this.$('button').on('click', function () {
                var text = $(this).text();
                var $input = $(this).parent().find('input');

                if (text === 'Show') {
                    $(this).text('Hide');
                    $input.attr('type', 'text');
                } else if (text === 'Hide') {
                    $(this).text('Show');
                    $input.attr('type', 'password');
                }
            });
            if (this.get('focus')) {
                this.$('input').focus();
            }
        },
        keyPress: function keyPress(event) {
            if (event.keyCode === 13) {
                this.sendAction("action");
            }
        },
        wrapperClazz: _ember['default'].computed(function () {
            return 'ember-password-toggle-wrapper ' + this.get('wrapperClass');
        }),
        buttonClazz: _ember['default'].computed(function () {
            return 'ember-password-toggle-btn ' + this.get('buttonClass');
        }),
        inputClazz: _ember['default'].computed(function () {
            return 'ember-password-toggle-input ' + this.get('inputClass');
        })
    });
});