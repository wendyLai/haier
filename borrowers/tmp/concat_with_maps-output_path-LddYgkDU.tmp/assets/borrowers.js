"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('borrowers/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'borrowers/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _borrowersConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _borrowersConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _borrowersConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _borrowersConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('borrowers/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'borrowers/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _borrowersConfigEnvironment) {

  var name = _borrowersConfigEnvironment['default'].APP.name;
  var version = _borrowersConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('borrowers/components/ivy-tab-list', ['exports', 'ivy-tabs/components/ivy-tab-list'], function (exports, _ivyTabsComponentsIvyTabList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyTabsComponentsIvyTabList['default'];
    }
  });
});
define('borrowers/components/ivy-tab-panel', ['exports', 'ivy-tabs/components/ivy-tab-panel'], function (exports, _ivyTabsComponentsIvyTabPanel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyTabsComponentsIvyTabPanel['default'];
    }
  });
});
define('borrowers/components/ivy-tab', ['exports', 'ivy-tabs/components/ivy-tab'], function (exports, _ivyTabsComponentsIvyTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyTabsComponentsIvyTab['default'];
    }
  });
});
define('borrowers/components/ivy-tabs', ['exports', 'ivy-tabs/components/ivy-tabs'], function (exports, _ivyTabsComponentsIvyTabs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyTabsComponentsIvyTabs['default'];
    }
  });
});
define('borrowers/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _semanticUiEmberComponentsUiAccordion) {
  exports['default'] = _semanticUiEmberComponentsUiAccordion['default'];
});
define('borrowers/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _semanticUiEmberComponentsUiCheckbox) {
  exports['default'] = _semanticUiEmberComponentsUiCheckbox['default'];
});
define('borrowers/components/ui-dropdown-item', ['exports', 'semantic-ui-ember/components/ui-dropdown-item'], function (exports, _semanticUiEmberComponentsUiDropdownItem) {
  exports['default'] = _semanticUiEmberComponentsUiDropdownItem['default'];
});
define('borrowers/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _semanticUiEmberComponentsUiDropdown) {
  exports['default'] = _semanticUiEmberComponentsUiDropdown['default'];
});
define('borrowers/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _semanticUiEmberComponentsUiEmbed) {
  exports['default'] = _semanticUiEmberComponentsUiEmbed['default'];
});
define('borrowers/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _semanticUiEmberComponentsUiModal) {
  exports['default'] = _semanticUiEmberComponentsUiModal['default'];
});
define('borrowers/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _semanticUiEmberComponentsUiNag) {
  exports['default'] = _semanticUiEmberComponentsUiNag['default'];
});
define('borrowers/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _semanticUiEmberComponentsUiPopup) {
  exports['default'] = _semanticUiEmberComponentsUiPopup['default'];
});
define('borrowers/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _semanticUiEmberComponentsUiProgress) {
  exports['default'] = _semanticUiEmberComponentsUiProgress['default'];
});
define('borrowers/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _semanticUiEmberComponentsUiRadio) {
  exports['default'] = _semanticUiEmberComponentsUiRadio['default'];
});
define('borrowers/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _semanticUiEmberComponentsUiRating) {
  exports['default'] = _semanticUiEmberComponentsUiRating['default'];
});
define('borrowers/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _semanticUiEmberComponentsUiSearch) {
  exports['default'] = _semanticUiEmberComponentsUiSearch['default'];
});
define('borrowers/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _semanticUiEmberComponentsUiShape) {
  exports['default'] = _semanticUiEmberComponentsUiShape['default'];
});
define('borrowers/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _semanticUiEmberComponentsUiSidebar) {
  exports['default'] = _semanticUiEmberComponentsUiSidebar['default'];
});
define('borrowers/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _semanticUiEmberComponentsUiSticky) {
  exports['default'] = _semanticUiEmberComponentsUiSticky['default'];
});
define('borrowers/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('borrowers/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('borrowers/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'borrowers/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _borrowersConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_borrowersConfigEnvironment['default'].APP.name, _borrowersConfigEnvironment['default'].APP.version)
  };
});
define('borrowers/initializers/export-application-global', ['exports', 'ember', 'borrowers/config/environment'], function (exports, _ember, _borrowersConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_borrowersConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _borrowersConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_borrowersConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('borrowers/models/func', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Object.extend({
		name: '',
		name_en: '',
		setupRows: _ember['default'].on('init', function () {
			if (!this.get('rows')) {
				this.set('rows', []);
			}
		}),
		func_slug: _ember['default'].computed('name_en', function () {
			return this.get('name_en').dasherize();
		})
	});
});
define('borrowers/models/kind', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Object.extend({
		id: '',
		name: '',
		kind_slug: _ember['default'].computed('id', function () {
			return this.get('id').dasherize();
		})
	});
});
define('borrowers/models/row', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Object.extend({
		id: '',
		setupKinds: _ember['default'].on('init', function () {
			if (!this.get('kinds')) {
				this.set('kinds', []);
			}
		}),
		row_slug: _ember['default'].computed('id', function () {
			return this.get('id').dasherize();
		})
	});
});
define('borrowers/router', ['exports', 'ember', 'borrowers/config/environment'], function (exports, _ember, _borrowersConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _borrowersConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('funcs', function () {
      this.route('func', { path: ':func_slug' }, function () {
        this.route('kind4');
        this.route('kind5');
        this.route('kind6');
        this.route('kindall', { path: ':kind_slug' });

        this.route('row', { path: ':row_slug' }, function () {
          this.route('kind', { path: ':kind_slug' });
        });
      });
    });
  });

  exports['default'] = Router;
});
define('borrowers/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		/*afterModel:function() {
  	this.transitionTo('funcs');
  }*/
	});
});
define("borrowers/routes/funcs/func/kind4", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    renderTemplate: function renderTemplate() {
      this.render({ outlet: "kind4" });
    }
  });
});
define("borrowers/routes/funcs/func/kind5", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    renderTemplate: function renderTemplate() {
      this.render({ outlet: "kind5" });
    }
  });
});
define("borrowers/routes/funcs/func/kind6", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    renderTemplate: function renderTemplate() {
      this.render({ outlet: "kind6" });
    }
  });
});
define('borrowers/routes/funcs/func/kindall', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var row = rows.findBy('row_slug', param.row_slug);
			var kinds = row.get('kinds');
			console.log(kinds);
			var kind = kinds.findBy('kind_slug', param.kind_slug);

			return kind;
		},
		afterModel: function afterModel() {
			console.log('*****', this.get('id'));
			//this.transitionTo('funcs.func.'++'');
		}
	});
});
define('borrowers/routes/funcs/func/row/kind', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			var row = this.modelFor('funcs.func.row');
			var kinds = row.get('kinds');
			var kind = kinds.findBy('kind_slug', param.kind_slug);
			console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/row', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			var func = this.modelFor('funcs.func');
			var rows = func.get('rows');
			var row = rows.findBy('row_slug', param.row_slug);
			//console.log(row);
			return row;
		}
	});
});
define('borrowers/routes/funcs/func', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			return this.modelFor('funcs').findBy('func_slug', param.func_slug);
		}
	});
});
define('borrowers/routes/funcs/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('borrowers/routes/funcs', ['exports', 'ember', 'borrowers/models/func', 'borrowers/models/row', 'borrowers/models/kind'], function (exports, _ember, _borrowersModelsFunc, _borrowersModelsRow, _borrowersModelsKind) {

	/*三级导航*/

	var kind111 = _borrowersModelsKind['default'].create({
		name: '路由状态',
		id: 'kind1'
	});

	var kind121 = _borrowersModelsKind['default'].create({
		name: '无线设备',
		id: 'kind2'
	});

	var kind131 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		id: 'kind3'
	});

	var kind211 = _borrowersModelsKind['default'].create({
		name: '在线设备',
		id: 'kind4'
	});

	var kind212 = _borrowersModelsKind['default'].create({
		name: '历史设备',
		id: 'kind5'
	});

	var kind213 = _borrowersModelsKind['default'].create({
		name: '黑名单',
		id: 'kind6'
	});

	var kind221 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		id: 'kind7'
	});

	var kind311 = _borrowersModelsKind['default'].create({
		name: '互联网(WAN)设置',
		id: 'kind8'
	});

	var kind411 = _borrowersModelsKind['default'].create({
		name: '局域网(WAN)设置',
		id: 'kind9'
	});

	var kind511 = _borrowersModelsKind['default'].create({
		name: '小悦网关助手',
		id: 'kind10'
	});

	var kind611 = _borrowersModelsKind['default'].create({
		name: '无线(wifi)设置',
		id: 'kind11'
	});

	var kind711 = _borrowersModelsKind['default'].create({
		name: '路由器管理密码重置',
		id: 'kind12'
	});

	var kind721 = _borrowersModelsKind['default'].create({
		name: '系统版本更新',
		id: 'kind13'
	});

	var kind731 = _borrowersModelsKind['default'].create({
		name: '恢复出厂设置',
		id: 'kind14'
	});

	var kind811 = _borrowersModelsKind['default'].create({
		name: '总流量统计',
		id: 'kind15'
	});

	var kind821 = _borrowersModelsKind['default'].create({
		name: '互联网连接状态',
		id: 'kind16'
	});

	var kind831 = _borrowersModelsKind['default'].create({
		name: '局域网连接状态',
		id: 'kind17'
	});

	var kind841 = _borrowersModelsKind['default'].create({
		name: '无线运行状态',
		id: 'kind18'
	});

	/*二级导航*/

	var row11 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind111]
	});

	var row12 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind121]
	});

	var row13 = _borrowersModelsRow['default'].create({
		id: 'row3',
		kinds: [kind131]
	});

	var row21 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind211, kind212, kind213]
	});

	var row22 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind221]
	});

	var row31 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind311]
	});

	var row41 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind411]
	});

	var row51 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind511]
	});

	var row61 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind611]
	});

	var row71 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind711]
	});

	var row72 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind721]
	});

	var row73 = _borrowersModelsRow['default'].create({
		id: 'row3',
		kinds: [kind731]
	});
	var row81 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind811]
	});

	var row82 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind821]
	});

	var row83 = _borrowersModelsRow['default'].create({
		id: 'row3',
		kinds: [kind831]
	});

	var row84 = _borrowersModelsRow['default'].create({
		id: 'row4',
		kinds: [kind841]
	});

	/*一级导航*/
	var func1 = _borrowersModelsFunc['default'].create({
		name: '路由状态',
		name_en: 'routestatus',
		rows: [row11, row12, row13]
	});

	var func2 = _borrowersModelsFunc['default'].create({
		name: '设备连接管理器',
		name_en: 'devicemanager',
		rows: [row21, row22]
	});

	var func3 = _borrowersModelsFunc['default'].create({
		name: '互联网WAN设置',
		name_en: 'WANsetting',
		rows: [row31]
	});

	var func4 = _borrowersModelsFunc['default'].create({
		name: '局域网LAN设置',
		name_en: 'LANsetting',
		rows: [row41]
	});

	var func5 = _borrowersModelsFunc['default'].create({
		name: '小悅网关助手',
		name_en: 'gatewayhelper',
		rows: [row51]
	});

	var func6 = _borrowersModelsFunc['default'].create({
		name: '无线设置',
		name_en: 'wirelesssetting',
		rows: [row61]
	});

	var func7 = _borrowersModelsFunc['default'].create({
		name: '系统设置',
		name_en: 'systemsetting',
		rows: [row71, row72, row73]
	});

	var func8 = _borrowersModelsFunc['default'].create({
		name: '运行状态',
		name_en: 'runningstatus',
		rows: [row81, row82, row83, row84]
	});

	var funcs = [func1, func2, func3, func4, func5, func6, func7, func8];

	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return funcs;
		} /*,
    afterModel: function(model) {
    var funcs = model;
    if (funcs.id    =id== 1) {
    	this.transitionTo('funcs.func', bands.get('firstObject'));
    }
    }*/
	});
});
define("borrowers/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 105
          }
        },
        "moduleName": "borrowers/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "id", "header");
        dom.setAttribute(el1, "class", "my-menu");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "my-item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("LOGO");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "my-menu right");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "http://www.haier.com/cn/");
        dom.setAttribute(el3, "class", "my-item blue");
        var el4 = dom.createTextNode("官网");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "http://bbs.haier.com/forum/zhzz/");
        dom.setAttribute(el3, "class", "my-item blue");
        var el4 = dom.createTextNode("论坛");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "javascript:void(0);");
        dom.setAttribute(el3, "id", "logout");
        dom.setAttribute(el3, "class", "my-item blue");
        var el4 = dom.createTextNode("退出");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "content");
        dom.setAttribute(el1, "style", "overflow:hidden;");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "id", "footer");
        dom.setAttribute(el1, "class", "ui footer");
        var el2 = dom.createTextNode("海尔集团版权所有（copyright ©   2015 Haier.All Right Reserved）");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [13, 1], [13, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/ui-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/ui-checkbox.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'checked');
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createAttrMorph(element0, 'data-id');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [1, 28], [1, 32]]]]], ["attribute", "checked", ["get", "checked", ["loc", [null, [1, 45], [1, 52]]]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [1, 66], [1, 74]]]]], ["attribute", "data-id", ["get", "data-id", ["loc", [null, [1, 87], [1, 94]]]]], ["content", "label", ["loc", [null, [2, 7], [2, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/ui-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/ui-dropdown.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/ui-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/ui-modal.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/ui-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/ui-radio.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'checked');
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createAttrMorph(element0, 'data-id');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [1, 28], [1, 32]]]]], ["attribute", "checked", ["get", "checked", ["loc", [null, [1, 45], [1, 52]]]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [1, 66], [1, 74]]]]], ["attribute", "data-id", ["get", "data-id", ["loc", [null, [1, 87], [1, 94]]]]], ["content", "label", ["loc", [null, [2, 7], [2, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/funcs/func/kind4", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("outlet kind4");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
  })());
});
define("borrowers/templates/funcs/func/kind5", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind5.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("outlet kind5");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
  })());
});
define("borrowers/templates/funcs/func/kind6", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 19
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("outlet kind6");
        dom.appendChild(el1, el2);
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
  })());
});
define("borrowers/templates/funcs/func/kindall", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kindall.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/funcs/func/row/kind", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs/func/row/kind.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("预留");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "model.id", ["loc", [null, [1, 3], [1, 15]]]], ["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/funcs/func/row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs/func/row.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("预留");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "model.id", ["loc", [null, [1, 3], [1, 15]]]], ["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/funcs/func", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@1.13.11",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 5,
                      "column": 6
                    },
                    "end": {
                      "line": 5,
                      "column": 85
                    }
                  },
                  "moduleName": "borrowers/templates/funcs/func.hbs"
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
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
                statements: [["inline", "link-to", [["get", "kind.name", ["loc", [null, [5, 28], [5, 37]]]], "funcs.func.kindall", ["get", "model.func_slug", ["loc", [null, [5, 59], [5, 74]]]], ["get", "kind.id", ["loc", [null, [5, 75], [5, 82]]]]], [], ["loc", [null, [5, 18], [5, 85]]]]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 4,
                    "column": 4
                  },
                  "end": {
                    "line": 6,
                    "column": 5
                  }
                },
                "moduleName": "borrowers/templates/funcs/func.hbs"
              },
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("		    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["block", "ivy-tab", [], [], 0, null, ["loc", [null, [5, 6], [5, 97]]]]],
              locals: ["kind"],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 3
                },
                "end": {
                  "line": 7,
                  "column": 3
                }
              },
              "moduleName": "borrowers/templates/funcs/func.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
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
            statements: [["block", "each", [["get", "row.kinds", ["loc", [null, [4, 12], [4, 21]]]]], [], 0, null, ["loc", [null, [4, 4], [6, 14]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 11,
                    "column": 4
                  },
                  "end": {
                    "line": 14,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("		    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("h2");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("的内容");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n		    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                return morphs;
              },
              statements: [["content", "kind.id", ["loc", [null, [12, 10], [12, 21]]]], ["inline", "outlet", [["get", "kind.id", ["loc", [null, [13, 15], [13, 22]]]]], [], ["loc", [null, [13, 6], [13, 24]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 2
                },
                "end": {
                  "line": 15,
                  "column": 2
                }
              },
              "moduleName": "borrowers/templates/funcs/func.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
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
            statements: [["block", "ivy-tab-panel", [], [], 0, null, ["loc", [null, [11, 4], [14, 22]]]]],
            locals: ["kind"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 1
              },
              "end": {
                "line": 17,
                "column": 1
              }
            },
            "moduleName": "borrowers/templates/funcs/func.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	 \n\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "ivy-tab-list", [], [], 0, null, ["loc", [null, [3, 3], [7, 20]]]], ["block", "each", [["get", "row.kinds", ["loc", [null, [10, 10], [10, 19]]]]], [], 1, null, ["loc", [null, [10, 2], [15, 11]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "borrowers/templates/funcs/func.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "ivy-tabs", [], [], 0, null, ["loc", [null, [2, 1], [17, 14]]]]],
        locals: ["row"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "each", [["get", "model.rows", ["loc", [null, [1, 8], [1, 18]]]]], [], 0, null, ["loc", [null, [1, 0], [18, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/funcs/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "moduleName": "borrowers/templates/funcs/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("haier");
        dom.appendChild(el1, el2);
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
  })());
});
define("borrowers/templates/funcs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui grid pusher");
        dom.setAttribute(el1, "style", "display:inline-block;");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", ["partials/nav"], [], ["loc", [null, [1, 0], [1, 26]]]], ["content", "outlet", ["loc", [null, [4, 1], [4, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 65
          }
        },
        "moduleName": "borrowers/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "style", "text-align:center;line-height:820px;");
        var el2 = dom.createTextNode("Haier开启智能生活");
        dom.appendChild(el1, el2);
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
  })());
});
define("borrowers/templates/partials/-nav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "borrowers/templates/partials/-nav.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "circle");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 0, 0);
            return morphs;
          },
          statements: [["content", "func.name", ["loc", [null, [6, 7], [6, 20]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 9,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/partials/-nav.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "link-to", ["funcs.func", ["get", "func.func_slug", ["loc", [null, [3, 26], [3, 40]]]]], [], 0, null, ["loc", [null, [3, 2], [8, 14]]]]],
        locals: ["func"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 6
          }
        },
        "moduleName": "borrowers/templates/partials/-nav.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui vertical menu");
        dom.setAttribute(el1, "id", "nav");
        dom.setAttribute(el1, "style", "min-height:820px;display:inline-block;margin:0;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [2, 9], [2, 14]]]]], [], 0, null, ["loc", [null, [2, 1], [9, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('borrowers/config/environment', ['ember'], function(Ember) {
  var prefix = 'borrowers';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("borrowers/app")["default"].create({"name":"borrowers","version":"0.0.0+cde0933a"});
}

/* jshint ignore:end */
//# sourceMappingURL=borrowers.map