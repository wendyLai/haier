define('borrowers/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('borrowers/tests/components/input-ip.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-ip.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-ip.js should pass jshint.\ncomponents/input-ip.js: line 26, col 61, Expected \'===\' and instead saw \'==\'.\ncomponents/input-ip.js: line 7, col 37, \'e\' is not defined.\ncomponents/input-ip.js: line 36, col 13, \'$\' is not defined.\n\n3 errors');
  });
});
define('borrowers/tests/components/input-password.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-password.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-password.js should pass jshint.\ncomponents/input-password.js: line 9, col 28, Expected \'===\' and instead saw \'==\'.\ncomponents/input-password.js: line 11, col 34, Expected \'===\' and instead saw \'==\'.\n\n2 errors');
  });
});
define('borrowers/tests/components/input-radio.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-radio.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-radio.js should pass jshint.\ncomponents/input-radio.js: line 10, col 17, \'this_checked\' is defined but never used.\n\n1 error');
  });
});
define('borrowers/tests/components/input-toggle.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-toggle.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-toggle.js should pass jshint.\ncomponents/input-toggle.js: line 11, col 28, Expected \'===\' and instead saw \'==\'.\ncomponents/input-toggle.js: line 15, col 97, Missing semicolon.\ncomponents/input-toggle.js: line 16, col 34, Expected \'===\' and instead saw \'==\'.\ncomponents/input-toggle.js: line 20, col 97, Missing semicolon.\n\n4 errors');
  });
});
define('borrowers/tests/components/item-icon-edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/item-icon-edit.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-icon-edit.js should pass jshint.');
  });
});
define('borrowers/tests/components/item-icon-wifi.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/item-icon-wifi.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-icon-wifi.js should pass jshint.');
  });
});
define('borrowers/tests/components/page-refresh.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/page-refresh.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-refresh.js should pass jshint.');
  });
});
define('borrowers/tests/components/page-toggle.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/page-toggle.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-toggle.js should pass jshint.');
  });
});
define('borrowers/tests/controllers/funcs/func/kind11.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/funcs/func');
  QUnit.test('controllers/funcs/func/kind11.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/funcs/func/kind11.js should pass jshint.\ncontrollers/funcs/func/kind11.js: line 15, col 32, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind11.js: line 27, col 50, \'value\' is defined but never used.\n\n2 errors');
  });
});
define('borrowers/tests/controllers/funcs/func/kind8.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/funcs/func');
  QUnit.test('controllers/funcs/func/kind8.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/funcs/func/kind8.js should pass jshint.\ncontrollers/funcs/func/kind8.js: line 9, col 11, Duplicate key \'isDHCP\'.\ncontrollers/funcs/func/kind8.js: line 10, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 14, col 12, Duplicate key \'isPPPOE\'.\ncontrollers/funcs/func/kind8.js: line 15, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 19, col 15, Duplicate key \'isstaticIP\'.\ncontrollers/funcs/func/kind8.js: line 20, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 24, col 15, Duplicate key \'isrepeater\'.\ncontrollers/funcs/func/kind8.js: line 25, col 41, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 47, col 32, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 49, col 38, Expected \'===\' and instead saw \'==\'.\ncontrollers/funcs/func/kind8.js: line 48, col 21, \'$\' is not defined.\ncontrollers/funcs/func/kind8.js: line 50, col 21, \'$\' is not defined.\ncontrollers/funcs/func/kind8.js: line 36, col 50, \'value\' is defined but never used.\n\n13 errors');
  });
});
define('borrowers/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('borrowers/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('borrowers/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'borrowers/tests/helpers/start-app', 'borrowers/tests/helpers/destroy-app'], function (exports, _qunit, _borrowersTestsHelpersStartApp, _borrowersTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _borrowersTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _borrowersTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('borrowers/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('borrowers/tests/helpers/resolver', ['exports', 'ember/resolver', 'borrowers/config/environment'], function (exports, _emberResolver, _borrowersConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _borrowersConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _borrowersConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('borrowers/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('borrowers/tests/helpers/start-app', ['exports', 'ember', 'borrowers/app', 'borrowers/config/environment'], function (exports, _ember, _borrowersApp, _borrowersConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _borrowersConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _borrowersApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('borrowers/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/icon-edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('icon-edit', 'Integration | Component | icon edit', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'icon-edit', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'icon-edit', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('borrowers/tests/integration/components/icon-edit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/icon-edit-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/icon-edit-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/icon-wifi-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('icon-wifi', 'Integration | Component | icon wifi', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'icon-wifi', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'icon-wifi', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('borrowers/tests/integration/components/icon-wifi-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/icon-wifi-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/icon-wifi-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/input-checkbox-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('input-checkbox', 'Integration | Component | input checkbox', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'input-checkbox', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'input-checkbox', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('borrowers/tests/integration/components/input-checkbox-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/input-checkbox-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-checkbox-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/input-password-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('input-password', 'Integration | Component | input password', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'input-password', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'input-password', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('borrowers/tests/integration/components/input-password-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/input-password-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-password-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/input-radio-test', ['exports'], function (exports) {

  moduleForComponent('input-radio', 'Integration | Component | input radio', {
    integration: true
  });

  test('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'input-radio', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'input-radio', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('borrowers/tests/integration/components/input-radio-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/input-radio-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/input-radio-test.js should pass jshint.\nintegration/components/input-radio-test.js: line 3, col 1, \'moduleForComponent\' is not defined.\nintegration/components/input-radio-test.js: line 7, col 1, \'test\' is not defined.\n\n2 errors');
  });
});
define('borrowers/tests/integration/components/input-radio]-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/input-radio]-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-radio]-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/ip-input-item-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/ip-input-item-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ip-input-item-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/ip-input-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/ip-input-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ip-input-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/page-refresh-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/page-refresh-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-refresh-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/page-toggle-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/page-toggle-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-toggle-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/star-rating-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/star-rating-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/star-rating-test.js should pass jshint.');
  });
});
define('borrowers/tests/integration/components/toggle-input-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/toggle-input-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/toggle-input-test.js should pass jshint.');
  });
});
define('borrowers/tests/models/func.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/func.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/func.js should pass jshint.');
  });
});
define('borrowers/tests/models/kind.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/kind.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/kind.js should pass jshint.');
  });
});
define('borrowers/tests/models/row.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/row.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/row.js should pass jshint.');
  });
});
define('borrowers/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('borrowers/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind1.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind1.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind1.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind10.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind10.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind10.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind11.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind11.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind11.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind12.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind12.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind12.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind13.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind13.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind13.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind14.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind14.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind14.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind15.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind15.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind15.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind16.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind16.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind16.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind17.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind17.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind17.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind18.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind18.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind18.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind2.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind2.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind3.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind3.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind3.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind4.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind4.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind4.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind5.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind5.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind5.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind6.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind6.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind6.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind7.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind7.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind7.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind8.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind8.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind8.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kind9.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kind9.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kind9.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/kindall.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kindall.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kindall.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs');
  QUnit.test('routes/funcs/func.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs');
  QUnit.test('routes/funcs/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/index.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/funcs.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs.js should pass jshint.');
  });
});
define('borrowers/tests/test-helper', ['exports', 'borrowers/tests/helpers/resolver', 'ember-qunit'], function (exports, _borrowersTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_borrowersTestsHelpersResolver['default']);
});
define('borrowers/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('borrowers/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/controllers/funcs/func/kind11-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/funcs/func');
  QUnit.test('unit/controllers/funcs/func/kind11-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/funcs/func/kind11-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/controllers/funcs/func/kind5-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/funcs/func');
  QUnit.test('unit/controllers/funcs/func/kind5-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/funcs/func/kind5-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/controllers/funcs/func/kind8-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/funcs/func');
  QUnit.test('unit/controllers/funcs/func/kind8-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/funcs/func/kind8-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/controllers/funcs/func/kind9-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/funcs/func');
  QUnit.test('unit/controllers/funcs/func/kind9-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/funcs/func/kind9-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/controllers/funcs/func-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/funcs');
  QUnit.test('unit/controllers/funcs/func-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/funcs/func-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/models/func-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/func-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/func-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/models/kind-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/kind-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/kind-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/models/row-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/row-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/row-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind1-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind1-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind1-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind10-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind10-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind10-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind11-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind11-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind11-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind12-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind12-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind12-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind13-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind13-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind13-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind14-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind14-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind14-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind15-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind15-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind15-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind16-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind16-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind16-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind17-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind17-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind17-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind18-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind18-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind18-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind2-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind2-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind2-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind3-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind3-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind3-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind4-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind4-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind4-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind5-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind5-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind5-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind6-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind6-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind6-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind7-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind7-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind7-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind8-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind8-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind8-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kind9-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kind9-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kind9-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/kindall-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/kindall-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/kindall-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/row/kind-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func/row');
  QUnit.test('unit/routes/funcs/func/row/kind-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/row/kind-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func/row-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs/func');
  QUnit.test('unit/routes/funcs/func/row-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func/row-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/func-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs');
  QUnit.test('unit/routes/funcs/func-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/func-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/funcs');
  QUnit.test('unit/routes/funcs/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs/index-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/funcs-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/funcs.func.kind1-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/funcs.func.kind1-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/funcs.func.kind1-test.js should pass jshint.');
  });
});
define('borrowers/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('borrowers/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map