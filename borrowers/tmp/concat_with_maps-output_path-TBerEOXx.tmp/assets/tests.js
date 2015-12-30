define('borrowers/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
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
define('borrowers/tests/routes/funcs/func/kindall.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/kindall.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/kindall.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/row/kind.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func/row');
  QUnit.test('routes/funcs/func/row/kind.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/row/kind.js should pass jshint.');
  });
});
define('borrowers/tests/routes/funcs/func/row.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/funcs/func');
  QUnit.test('routes/funcs/func/row.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/funcs/func/row.js should pass jshint.');
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
define('borrowers/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
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
define('borrowers/tests/unit/models/func-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('func', 'Unit | Model | func', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
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
define('borrowers/tests/unit/models/kind-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('kind', 'Unit | Model | kind', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
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
define('borrowers/tests/unit/models/row-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('row', 'Unit | Model | row', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
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
define('borrowers/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/func/kind4-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/func/kind4', 'Unit | Route | funcs/func/kind4', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/func/kind5-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/func/kind5', 'Unit | Route | funcs/func/kind5', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/func/kind6-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/func/kind6', 'Unit | Route | funcs/func/kind6', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/func/kindall-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/func/kindall', 'Unit | Route | funcs/func/kindall', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/func/row/kind-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/func/row/kind', 'Unit | Route | funcs/func/row/kind', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/func/row-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/func/row', 'Unit | Route | funcs/func/row', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/func-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/func', 'Unit | Route | funcs/func', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs/index', 'Unit | Route | funcs/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/funcs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:funcs', 'Unit | Route | funcs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('borrowers/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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