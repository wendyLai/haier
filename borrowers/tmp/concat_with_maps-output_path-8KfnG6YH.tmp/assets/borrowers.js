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
define('borrowers/components/input-ip', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		isread: true,
		actions: {
			valid_value: function valid_value(event) {
				var eventObj = event || e;
				var keyCode = eventObj.keyCode || eventObj.which;
				if (keyCode >= 48 && keyCode <= 57) {
					return true;
				} else {
					return false;
				}
			},
			update_value: function update_value(params) {
				//console.log(params);
				var this_index = parseInt(params) - 1; //index的值

				var this_id = this.get('elementId');
				//console.log(this_id);

				var this_input_arr = _ember['default'].$("#" + this_id + " input");
				//console.log(this_input_arr);

				if (this_input_arr.eq(this_index).val().length == 3) {
					//console.log(this_index,"--------应该跳转了----------");
					_ember['default'].$("#" + this_id + " input").eq(this_index + 1).focus();
					_ember['default'].$("#" + this_id + " input").eq(this_index + 1).select();
				}
			},
			clear_ip: function clear_ip() {
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id + " .ip_input input").val("");
			}

		}
	});
});
define('borrowers/components/input-password', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			toggle_password: function toggle_password() {
				var this_id = this.get('elementId');
				var this_type = _ember['default'].$("#" + this_id + " input").attr("type");
				//console.log(this_id);
				if (this_type == "text") {
					_ember['default'].$("#" + this_id + " input").attr("type", "password");
				} else if (this_type == "password") {
					_ember['default'].$("#" + this_id + " input").attr("type", "text");
				}
			}
		}
	});
});
define('borrowers/components/input-radio', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			radio_toggle: function radio_toggle() {
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_name = this.get('name');
				//console.log( this_name );
				var this_checked = _ember['default'].$("#" + this_id + "").find("input").attr("checked");
				//console.log( this_checked );

				_ember['default'].$("input[name=" + this_name + "]").removeAttr("checked");
				_ember['default'].$("input[name=" + this_name + "]").parent().removeClass("cur");

				_ember['default'].$("#" + this_id + "").find("input").attr("checked", true);
				_ember['default'].$("#" + this_id + "").find(".radio_box").addClass("cur");

				this.sendAction('setAction');
			}
		}
	});
});
define('borrowers/components/input-toggle', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			toggle_off_on: function toggle_off_on() {
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_html = _ember['default'].$("#" + this_id + "").find("label").html();
				//console.log( this_html );

				if (this_html == "off") {
					_ember['default'].$("#" + this_id + "").find("label").html("on");
					_ember['default'].$("#" + this_id + "").find("input").attr("checked", true);
					_ember['default'].$("#" + this_id + "").find(".toggle_box").addClass("cur");
					_ember['default'].$("#" + this_id + "").find(".toggle_span").stop().animate({ "left": "2em" }, 300);
				} else if (this_html == "on") {
					_ember['default'].$("#" + this_id + "").find("label").html("off");
					_ember['default'].$("#" + this_id + "").find("input").removeAttr("checked");
					_ember['default'].$("#" + this_id + "").find(".toggle_box").removeClass("cur");
					_ember['default'].$("#" + this_id + "").find(".toggle_span").stop().animate({ "left": "0em" }, 300);
				}
			}
		}
	});
});
define('borrowers/components/item-icon-edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		showEdit: true,
		showSave: false,
		oldvalue: null,

		actions: {
			do_edit: function do_edit() {
				var this_id = this.get('elementId');
				//console.log(this_id);
				var this_input = _ember['default'].$("#" + this_id + "").children(".edit_input");
				//console.log(this_input.attr("class"));

				this_input.removeClass('transparent').attr("readOnly", false);

				var now_value = this_input.val();
				//console.log(now_value);

				this.set("showEdit", false);
				this.set("showSave", true);
				this.set("oldvalue", now_value);

				//console.log( this.get("oldvalue") );
			},
			do_save: function do_save() {
				var this_id = this.get('elementId');
				//console.log(this_id);
				var this_input = _ember['default'].$("#" + this_id + "").children(".edit_input");
				//console.log(this_input.attr("class"));

				this_input.addClass('transparent').attr("readOnly", true);

				this.set("showEdit", true);
				this.set("showSave", false);
			},
			do_cancle: function do_cancle() {
				var this_id = this.get('elementId');
				//console.log(this_id);
				var this_input = _ember['default'].$("#" + this_id + "").children(".edit_input");
				//console.log(this_input.attr("class"));

				var old_value = this.get("oldvalue");
				//console.log(old_value);

				this_input.val(old_value).addClass('transparent').attr("readOnly", true);

				this.set("showEdit", true);
				this.set("showSave", false);
			}
		}
	});
});
define('borrowers/components/item-icon-wifi', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
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
define("borrowers/components/page-refresh", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		tagName: "li",
		actions: {
			doRefresh: function doRefresh() {
				window.location.reload(); //刷新当前页面.
				//parent.location.reload();//刷新父亲对象（用于框架）
				//opener.location.reload();//刷新父窗口对象（用于单开窗口）
				//top.location.reload();//刷新最顶端对象（用于多开窗口）
			}
		}
	});
});
define("borrowers/components/page-toggle", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		tagName: "li",
		actions: {
			listToggle: function listToggle() {
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_icon = _ember["default"].$("#" + this_id + "").find(".chevron");
				var this_content = _ember["default"].$("#" + this_id + "").parent().siblings(".ivy-tab-panel");

				if (!_ember["default"].$("#" + this_id + "").hasClass("disabled")) {
					if (this_icon.hasClass("down")) {
						this_content.slideUp();
						this_icon.removeClass("down").addClass("up");
					} else {
						this_content.slideDown();
						this_icon.removeClass("up").addClass("down");
					}
				}
			}
		}
	});
});
define('borrowers/components/password-toggle', ['exports', 'ember-cli-password-toggle/components/password-toggle'], function (exports, _emberCliPasswordToggleComponentsPasswordToggle) {
  exports['default'] = _emberCliPasswordToggleComponentsPasswordToggle['default'];
});
define('borrowers/components/toggle-switch', ['exports', 'toggle-switch/components/toggle-switch'], function (exports, _toggleSwitchComponentsToggleSwitch) {
  exports['default'] = _toggleSwitchComponentsToggleSwitch['default'];
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
define("borrowers/controllers/funcs/func/kind11", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		itemActions_1: ["不加密", "已加密"],
		itemActions_2: ["穿墙模式", "穿墙模式"],
		itemActions_3: ["11B/G/N default", "17B/G/N default"],
		itemActions_4: ["自动", "自动"],
		itemActions_5: ["20/40Mhz", "20/40Mhz"],
		itemActions_7: ["AES兼容", "AES兼容"],
		itemActions_9: ["11B", "11B"],
		selectedAction: null,
		changeitem: function changeitem(params) {
			var this_value = params.value;
			var next = params.tabIndex;
			if (this_value.length == params.maxLength) {
				/*console.log("--------达到最大字符----------");*/
				if (next < params.length) {
					/*console.log("--------应该跳转了----------");*/
					params[next].focus();
					params[next].select();
				}
			}
		},
		actions: {
			update_selected: function update_selected(component, id, value) {
				this.set('selectedAction', id);
			}
		}
	});
});
define('borrowers/controllers/funcs/func/kind8', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		isDHCP: false,
		isPPPOE: false,
		isstaticIP: false,
		isrepeater: false,
		connectiontype: 1, //设置一个默认值
		isDHCP: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 1) {
				return true;
			}
		}),
		isPPPOE: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 2) {
				return true;
			}
		}),
		isstaticIP: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 3) {
				return true;
			}
		}),
		isrepeater: _ember['default'].computed('connectiontype', function () {
			if (this.get('connectiontype') == 4) {
				return true;
			}
		}),

		itemActions_2: ["自动连接", "手动连接", "按需连接"],
		itemActions_4: ["桥接模式已关闭", "桥接模式已开启"],

		selectedAction: null,

		actions: {
			update_selected: function update_selected(component, id, value) {
				this.set('selectedAction', id);
			},
			radio_selected: function radio_selected() {
				var connectiontype = _ember['default'].$("#kind8_t input[name='connectiontype']").parents(".radio_box.cur").parents(".field").attr("connectiontype");
				//console.log(connectiontype);
				this.set('connectiontype', connectiontype);
			},
			toggle_password: function toggle_password() {
				var this_type = _ember['default'].$(".passwordinput.password_1 input").attr("type");
				//console.log(this_type);
				if (this_type == "text") {
					$(".passwordinput.password_1 input").attr("type", "password");
				} else if (this_type == "password") {
					$(".passwordinput.password_1 input").attr("type", "text");
				}
			}
		}
	});
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
		name_en: '',
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
        this.route('kindall', { path: ':row_slug/:kind_slug' });

        this.route('kind1');
        this.route('kind2');
        this.route('kind3');
        this.route('kind4');
        this.route('kind5');
        this.route('kind6');
        this.route('kind7');
        this.route('kind8');
        this.route('kind9');
        this.route('kind10');
        this.route('kind11');
        this.route('kind12');
        this.route('kind13');
        this.route('kind14');
        this.route('kind15');
        this.route('kind16');
        this.route('kind17');
        this.route('kind18');
      });
    });
  });

  exports['default'] = Router;
});
define('borrowers/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		afterModel: function afterModel() {
			this.transitionTo('funcs');
		}
	});
});
define('borrowers/routes/funcs/func/kind1', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind1' });
		}
	});
});
define('borrowers/routes/funcs/func/kind10', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind10' });
		}
	});
});
define('borrowers/routes/funcs/func/kind11', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind11' });
		}
	});
});
define('borrowers/routes/funcs/func/kind12', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind12' });
		}
	});
});
define('borrowers/routes/funcs/func/kind13', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind13' });
		}
	});
});
define('borrowers/routes/funcs/func/kind14', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind14' });
		}
	});
});
define('borrowers/routes/funcs/func/kind15', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind15' });
		}
	});
});
define('borrowers/routes/funcs/func/kind16', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind16' });
		}
	});
});
define('borrowers/routes/funcs/func/kind17', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind17' });
		}
	});
});
define('borrowers/routes/funcs/func/kind18', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind18' });
		}
	});
});
define('borrowers/routes/funcs/func/kind2', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind2' });
		},
		model: function model() {
			/*获取数据*/
			var this_route = this.routeName;
			var this_param = this_route.split('.').get('lastObject');
			//console.log(this_param);

			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var kinds = [];
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i].get("kinds");

				for (var j = 0; j < row.length; j++) {
					kinds = kinds.addObject(row[j]);
				}
			}
			//console.log(kinds);
			var kind = kinds.findBy("id", this_param);
			//console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/kind3', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind3' });
		},
		model: function model() {
			/*获取数据*/
			var this_route = this.routeName;
			var this_param = this_route.split('.').get('lastObject');
			//console.log(this_param);

			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var kinds = [];
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i].get("kinds");

				for (var j = 0; j < row.length; j++) {
					kinds = kinds.addObject(row[j]);
				}
			}
			//console.log(kinds);
			var kind = kinds.findBy("id", this_param);
			//console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/kind4', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind4' });
		},
		model: function model() {
			/*获取数据*/
			var this_route = this.routeName;
			var this_param = this_route.split('.').get('lastObject');
			//console.log(this_param);

			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var kinds = [];
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i].get("kinds");

				for (var j = 0; j < row.length; j++) {
					kinds = kinds.addObject(row[j]);
				}
			}
			//console.log(kinds);
			var kind = kinds.findBy("id", this_param);
			//console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/kind5', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind5' });
		},
		model: function model() {
			/*获取数据*/
			var this_route = this.routeName;
			var this_param = this_route.split('.').get('lastObject');
			//console.log(this_param);

			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var kinds = [];
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i].get("kinds");

				for (var j = 0; j < row.length; j++) {
					kinds = kinds.addObject(row[j]);
				}
			}
			//console.log(kinds);
			var kind = kinds.findBy("id", this_param);
			//console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/kind6', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: "kind6" });
		},
		model: function model() {
			/*获取数据*/
			var this_route = this.routeName;
			var this_param = this_route.split('.').get('lastObject');
			//console.log(this_param);

			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var kinds = [];
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i].get("kinds");

				for (var j = 0; j < row.length; j++) {
					kinds = kinds.addObject(row[j]);
				}
			}
			//console.log(kinds);
			var kind = kinds.findBy("id", this_param);
			//console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/kind7', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind7' });
		},
		model: function model() {
			/*获取数据*/
			var this_route = this.routeName;
			var this_param = this_route.split('.').get('lastObject');
			//console.log(this_param);

			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var kinds = [];
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i].get("kinds");

				for (var j = 0; j < row.length; j++) {
					kinds = kinds.addObject(row[j]);
				}
			}
			//console.log(kinds);
			var kind = kinds.findBy("id", this_param);
			//console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/kind8', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind8' });
		},
		model: function model() {
			/*获取数据*/
			var this_route = this.routeName;
			var this_param = this_route.split('.').get('lastObject');
			//console.log(this_param);

			var func = this.modelFor('funcs.func');
			var rows = func.get("rows");
			var kinds = [];
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i].get("kinds");

				for (var j = 0; j < row.length; j++) {
					kinds = kinds.addObject(row[j]);
				}
			}
			//console.log(kinds);
			var kind = kinds.findBy("id", this_param);
			//console.log(kind);
			return kind;
		}
	});
});
define('borrowers/routes/funcs/func/kind9', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render({ outlet: 'kind9' });
		}
	});
});
define('borrowers/routes/funcs/func/kindall', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			//console.log('*****',param);
			var rows = this.modelFor('funcs.func').get('rows');
			var row = rows.findBy('row_slug', param.row_slug);
			var kinds = row.get('kinds');
			var kind = kinds.findBy('kind_slug', param.kind_slug);
			return kind;
		},
		afterModel: function afterModel(param) {
			//console.log('*****',param.id);
			this.transitionTo('funcs.func.' + param.id + '');
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
		name_en: 'routingstatus',
		id: 'kind1',
		icon_y: "-0px"
	});

	var kind121 = _borrowersModelsKind['default'].create({
		name: '无线设备',
		name_en: 'wirelessdevice',
		id: 'kind2',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W-xiaomishouji',
			MAC: '0C:82:68:10:03:5E',
			IP: '192.168.68.119',
			wifitype: "2.4"
		}],
		icon_y: "-24px"
	});

	var kind131 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		name_en: 'USB',
		id: 'kind3',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			storagetype: '内置存储',
			devicename: 'MI4W-xiaomishouji',
			totalcapacity: '977.75GB',
			usedcapacity: '142.54MB'
		}],
		icon_y: "-48px"
	});

	var kind211 = _borrowersModelsKind['default'].create({
		name: '在线设备',
		name_en: 'onlineunit',
		id: 'kind4',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W-xiaomishouji',
			MAC: '0C:82:68:10:03:5E',
			IP: '192.168.68.119',
			wifitype: "2.4"
		}],
		icon_y: "-72px"
	});

	var kind212 = _borrowersModelsKind['default'].create({
		name: '历史设备',
		name_en: 'oldunit',
		id: 'kind5',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W-xiaomishouji',
			MAC: '0C:82:68:10:03:5E'
		}, {
			kindisknow: false,
			kindismobile: false,
			kindiscomputer: true,
			devicename: 'MI4W-231',
			MAC: '0C:22:68:10:03:5E'
		}, {
			kindisknow: false,
			kindismobile: true,
			kindiscomputer: false,
			devicename: 'MI4W-12',
			MAC: '0C:221:68:10:03:5E'
		}, {
			kindisknow: false,
			kindismobile: true,
			kindiscomputer: false,
			devicename: 'MI4W-231',
			MAC: '0D:22:68:10:03:5E'
		}, {
			kindisknow: true,
			kindismobile: false,
			kindiscomputer: false,
			devicename: 'MI4W-231',
			MAC: '0E:22:68:10:03:5E'
		}],
		icon_y: "-96px"

	});

	var kind213 = _borrowersModelsKind['default'].create({
		name: '黑名单',
		name_en: 'blacklist',
		id: 'kind6',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W324-xiaomishouji',
			MAC: '0E:22:63:10:03:5E'
		}, {
			kindisknow: true,
			kindiscomputer: false,
			kindismobile: false,
			devicename: 'MI4W324-hongmishouji',
			MAC: '4E:22:63:10:03:5E'
		}],
		icon_y: "-120px"
	});

	var kind221 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		name_en: 'USB',
		id: 'kind7',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			storagetype: '内置存储',
			devicename: 'MI4W-xiaomishouji',
			totalcapacity: '977.75GB',
			usedcapacity: '142.54MB'
		}],
		icon_y: "-144px"
	});

	var kind311 = _borrowersModelsKind['default'].create({
		name: '互联网（WAN）设置',
		name_en: 'WANsetting',
		id: 'kind8',
		icon_y: "-168px"
	});

	var kind411 = _borrowersModelsKind['default'].create({
		name: '局域网（LAN）设置',
		name_en: 'LANsetting',
		id: 'kind9',
		icon_y: "-192px"
	});

	var kind511 = _borrowersModelsKind['default'].create({
		name: '小悦网关助手',
		name_en: 'gatewayhelper',
		id: 'kind10',
		icon_y: "-216px"
	});

	var kind611 = _borrowersModelsKind['default'].create({
		name: '无线（wifi）设置',
		name_en: 'wifisetting',
		id: 'kind11',
		icon_y: "-240px"
	});

	var kind711 = _borrowersModelsKind['default'].create({
		name: '路由器管理密码重置',
		name_en: 'resetkey',
		id: 'kind12',
		icon_y: "-264px"
	});

	var kind721 = _borrowersModelsKind['default'].create({
		name: '系统版本更新',
		name_en: 'updata',
		id: 'kind13',
		icon_y: "-288px"
	});

	var kind731 = _borrowersModelsKind['default'].create({
		name: '恢复出厂设置',
		name_en: 'restorefactory',
		id: 'kind14',
		icon_y: "-312px"
	});

	var kind811 = _borrowersModelsKind['default'].create({
		name: '总流量统计',
		name_en: 'trafficstatistics',
		id: 'kind15',
		icon_y: "-336px"
	});

	var kind821 = _borrowersModelsKind['default'].create({
		name: '互联网连接状态',
		name_en: 'internetconnection',
		id: 'kind16',
		icon_y: "-360px"
	});

	var kind831 = _borrowersModelsKind['default'].create({
		name: '局域网连接状态',
		name_en: 'LANconnection',
		id: 'kind17',
		icon_y: "-384px"
	});

	var kind841 = _borrowersModelsKind['default'].create({
		name: '无线运行状态',
		name_en: 'wirelessstate',
		id: 'kind18',
		icon_y: "-408px"
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
            "line": 19,
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
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "my-item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/logo.png");
        dom.setAttribute(el3, "alt", "");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "my-menu fr");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "http://www.haier.com/cn/");
        dom.setAttribute(el3, "class", "my-item myblue");
        var el4 = dom.createTextNode("官网");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "http://bbs.haier.com/forum/zhzz/");
        dom.setAttribute(el3, "class", "my-item myblue");
        var el4 = dom.createTextNode("论坛");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "javascript:void(0);");
        dom.setAttribute(el3, "id", "logout");
        dom.setAttribute(el3, "class", "my-item myblue");
        var el4 = dom.createTextNode("退出");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	\n");
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
      statements: [["content", "outlet", ["loc", [null, [16, 1], [16, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/input-ip", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "borrowers/templates/components/input-ip.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button transparent ip_btn");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "delete icon myred");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["clear_ip"], [], ["loc", [null, [12, 31], [12, 52]]]]],
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 7
          }
        },
        "moduleName": "borrowers/templates/components/input-ip.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui input ip_input");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [5]);
        var element4 = dom.childAt(element1, [9]);
        var element5 = dom.childAt(element1, [13]);
        var morphs = new Array(17);
        morphs[0] = dom.createAttrMorph(element2, 'onKeypress');
        morphs[1] = dom.createAttrMorph(element2, 'onKeyup');
        morphs[2] = dom.createAttrMorph(element2, 'value');
        morphs[3] = dom.createAttrMorph(element2, 'readOnly');
        morphs[4] = dom.createAttrMorph(element3, 'onKeypress');
        morphs[5] = dom.createAttrMorph(element3, 'onKeyup');
        morphs[6] = dom.createAttrMorph(element3, 'value');
        morphs[7] = dom.createAttrMorph(element3, 'readOnly');
        morphs[8] = dom.createAttrMorph(element4, 'onKeypress');
        morphs[9] = dom.createAttrMorph(element4, 'onKeyup');
        morphs[10] = dom.createAttrMorph(element4, 'value');
        morphs[11] = dom.createAttrMorph(element4, 'readOnly');
        morphs[12] = dom.createAttrMorph(element5, 'onKeypress');
        morphs[13] = dom.createAttrMorph(element5, 'onKeyup');
        morphs[14] = dom.createAttrMorph(element5, 'value');
        morphs[15] = dom.createAttrMorph(element5, 'readOnly');
        morphs[16] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [2, 58], [2, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "1"], [], ["loc", [null, [2, 91], [2, 120]]]]], ["attribute", "value", ["get", "value1", ["loc", [null, [2, 129], [2, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [2, 149], [2, 155]]]]], ["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [4, 58], [4, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "2"], [], ["loc", [null, [4, 91], [4, 120]]]]], ["attribute", "value", ["get", "value2", ["loc", [null, [4, 129], [4, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [4, 149], [4, 155]]]]], ["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [6, 58], [6, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "3"], [], ["loc", [null, [6, 91], [6, 120]]]]], ["attribute", "value", ["get", "value3", ["loc", [null, [6, 129], [6, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [6, 149], [6, 155]]]]], ["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [8, 58], [8, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "4"], [], ["loc", [null, [8, 91], [8, 120]]]]], ["attribute", "value", ["get", "value4", ["loc", [null, [8, 129], [8, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [8, 149], [8, 155]]]]], ["block", "if", [["get", "isneedbtn", ["loc", [null, [10, 6], [10, 15]]]]], [], 0, null, ["loc", [null, [10, 0], [14, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/components/input-password", ["exports"], function (exports) {
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
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/input-password.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui input");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "password");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "ui icon button transparent");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "unhide icon myblue");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["toggle_password"], [], ["loc", [null, [5, 31], [5, 59]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/input-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "borrowers/templates/components/input-radio.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "radio_input clearfix");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "radio_box fl cur");
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "radio_span fl");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "radio");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [1, 3]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createAttrMorph(element3, 'name');
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["radio_toggle"], [], ["loc", [null, [2, 35], [2, 60]]]], ["attribute", "name", ["get", "name", ["loc", [null, [5, 30], [5, 34]]]]], ["content", "label", ["loc", [null, [7, 20], [7, 29]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "borrowers/templates/components/input-radio.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "radio_input clearfix");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "radio_box fl");
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "radio_span fl");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "radio");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1, 3]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createAttrMorph(element1, 'name');
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["radio_toggle"], [], ["loc", [null, [10, 35], [10, 60]]]], ["attribute", "name", ["get", "name", ["loc", [null, [13, 30], [13, 34]]]]], ["content", "label", ["loc", [null, [15, 20], [15, 29]]]]],
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 7
          }
        },
        "moduleName": "borrowers/templates/components/input-radio.hbs"
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
      statements: [["block", "if", [["get", "isdefault", ["loc", [null, [1, 6], [1, 15]]]]], [], 0, 1, ["loc", [null, [1, 0], [17, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("borrowers/templates/components/input-toggle", ["exports"], function (exports) {
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
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/input-toggle.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "toggle_input clearfix");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "toggle_box fl");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "toggle_span fl");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "type", "checkbox");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "class", "fl");
        var el3 = dom.createTextNode("off");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 3]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["toggle_off_on"], [], ["loc", [null, [4, 25], [4, 51]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/item-icon-edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 1
            },
            "end": {
              "line": 6,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/components/item-icon-edit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon write myblue");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["element", "action", ["do_edit"], [], ["loc", [null, [5, 31], [5, 51]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 1
            },
            "end": {
              "line": 10,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/components/item-icon-edit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon checkmark myred");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon remove");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["element", "action", ["do_save"], [], ["loc", [null, [8, 34], [8, 54]]]], ["element", "action", ["do_cancle"], [], ["loc", [null, [9, 25], [9, 47]]]]],
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/item-icon-edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("：\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1, "type", "text");
        dom.setAttribute(el1, "class", "edit_input transparent");
        dom.setAttribute(el1, "readOnly", "true");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "icon_list");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(fragment, [4]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createAttrMorph(element3, 'value');
        morphs[2] = dom.createMorphAt(element4, 1, 1);
        morphs[3] = dom.createMorphAt(element4, 2, 2);
        return morphs;
      },
      statements: [["content", "label", ["loc", [null, [1, 7], [1, 16]]]], ["attribute", "value", ["get", "defaultvalue", ["loc", [null, [2, 72], [2, 84]]]]], ["block", "if", [["get", "showEdit", ["loc", [null, [4, 7], [4, 15]]]]], [], 0, null, ["loc", [null, [4, 1], [6, 8]]]], ["block", "if", [["get", "showSave", ["loc", [null, [7, 7], [7, 15]]]]], [], 1, null, ["loc", [null, [7, 1], [10, 8]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("borrowers/templates/components/item-icon-wifi", ["exports"], function (exports) {
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
            "line": 5,
            "column": 8
          }
        },
        "moduleName": "borrowers/templates/components/item-icon-wifi.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("：\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1, "class", "wifiicon");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "icon rss");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "wifitype");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 3]), 0, 0);
        return morphs;
      },
      statements: [["content", "label", ["loc", [null, [1, 7], [1, 16]]]], ["content", "wifitype", ["loc", [null, [4, 24], [4, 36]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/page-refresh", ["exports"], function (exports) {
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
            "column": 51
          }
        },
        "moduleName": "borrowers/templates/components/page-refresh.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1, "class", "icon refresh");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["doRefresh"], [], ["loc", [null, [1, 24], [1, 46]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/page-toggle", ["exports"], function (exports) {
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
            "column": 57
          }
        },
        "moduleName": "borrowers/templates/components/page-toggle.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1, "class", "icon chevron down");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["listToggle"], [], ["loc", [null, [1, 29], [1, 52]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/password-toggle", ["exports"], function (exports) {
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
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/password-toggle.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui input");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "tabindex", "-1");
        dom.setAttribute(el3, "data-click", "pw-btn");
        dom.setAttribute(el3, "data-pw", "show");
        dom.setAttribute(el3, "style", "display:inline-block;");
        dom.setAttribute(el3, "class", "unhide icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element2, 'class');
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["get", "wrapperClazz", ["loc", [null, [1, 13], [1, 25]]]]], ["attribute", "class", ["get", "buttonClazz", ["loc", [null, [3, 13], [3, 24]]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [4, 16], [4, 24]]]]], [], []], "type", "password", "id", ["subexpr", "@mut", [["get", "inputId", ["loc", [null, [4, 44], [4, 51]]]]], [], []], "class", ["subexpr", "@mut", [["get", "inputClazz", ["loc", [null, [4, 58], [4, 68]]]]], [], []], "tabindex", ["subexpr", "@mut", [["get", "tabindex", ["loc", [null, [4, 78], [4, 86]]]]], [], []]], ["loc", [null, [4, 2], [4, 88]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/toggle-switch", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 6
              },
              "end": {
                "line": 11,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/components/toggle-switch.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
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
          statements: [["content", "toggleMessageWhenOn", ["loc", [null, [10, 1], [10, 24]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 6
              },
              "end": {
                "line": 13,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/components/toggle-switch.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
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
          statements: [["content", "toggleMessageWhenOff", ["loc", [null, [12, 1], [12, 25]]]]],
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
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 15,
              "column": 2
            }
          },
          "moduleName": "borrowers/templates/components/toggle-switch.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "toggle-message");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["get", "isOn", ["loc", [null, [9, 12], [9, 16]]]]], [], 0, 1, ["loc", [null, [9, 6], [13, 13]]]]],
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
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/toggle-switch.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "toggle-switch-component");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "button");
        dom.setAttribute(el2, "class", "toggle-switch");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "toggle-switch-a11y-message");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["element", "action", ["toggle"], [], ["loc", [null, [1, 38], [1, 57]]]], ["content", "a11yMessage", ["loc", [null, [4, 6], [4, 21]]]], ["block", "if", [["get", "displayToggleMessage", ["loc", [null, [7, 8], [7, 28]]]]], [], 0, null, ["loc", [null, [7, 2], [15, 9]]]], ["content", "yield", ["loc", [null, [16, 2], [16, 11]]]]],
      locals: [],
      templates: [child0]
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
define("borrowers/templates/funcs/func/kind1", ["exports"], function (exports) {
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
            "line": 63,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind1.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind1_t");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("图表");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui divider");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind1_b");
        dom.setAttribute(el1, "class", "ui horizontal list");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "kind1img navimg4");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n            LAN1未连接\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "kind1img navimg4");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n            LAN2未连接\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "kind1img navimg3");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n            WAN未连接\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "kind1img navimg2");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n            USB未连接\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "kind1img navimg6");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n            2G-未开启\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "kind1img navimg6");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n            5G-未开启\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "kind1img navimg1");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n            重启路由器\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n    $(function(){\n    \n        var main_height=$(\"#main\").outerHeight();\n        $(\"#nav\").css(\"height\",main_height);\n\n    })\n\n");
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
define("borrowers/templates/funcs/func/kind10", ["exports"], function (exports) {
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
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind10.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind10_t");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "center");
        var el3 = dom.createTextNode("小悅网关助手APP");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "center");
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/erweima.png");
        dom.setAttribute(el3, "alt", "");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "center");
        var el3 = dom.createTextNode("扫描二维码下载应用");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
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
define("borrowers/templates/funcs/func/kind11", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 36,
                "column": 6
              },
              "end": {
                "line": 40,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element10 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element10, 'data-id');
            morphs[1] = dom.createMorphAt(element10, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [37, 36], [37, 46]]]]]]], ["content", "actionname", ["loc", [null, [38, 8], [38, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 4
            },
            "end": {
              "line": 42,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_1", ["loc", [null, [36, 14], [36, 27]]]]], [], 0, null, ["loc", [null, [36, 6], [40, 15]]]]],
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
                "line": 53,
                "column": 6
              },
              "end": {
                "line": 57,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element9 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element9, 'data-id');
            morphs[1] = dom.createMorphAt(element9, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [54, 36], [54, 46]]]]]]], ["content", "actionname", ["loc", [null, [55, 8], [55, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 4
            },
            "end": {
              "line": 59,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_2", ["loc", [null, [53, 14], [53, 27]]]]], [], 0, null, ["loc", [null, [53, 6], [57, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 77,
                "column": 6
              },
              "end": {
                "line": 81,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element8 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element8, 'data-id');
            morphs[1] = dom.createMorphAt(element8, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [78, 36], [78, 46]]]]]]], ["content", "actionname", ["loc", [null, [79, 8], [79, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 73,
              "column": 4
            },
            "end": {
              "line": 83,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_3", ["loc", [null, [77, 14], [77, 27]]]]], [], 0, null, ["loc", [null, [77, 6], [81, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 94,
                "column": 6
              },
              "end": {
                "line": 98,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element7 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element7, 'data-id');
            morphs[1] = dom.createMorphAt(element7, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [95, 36], [95, 46]]]]]]], ["content", "actionname", ["loc", [null, [96, 8], [96, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 90,
              "column": 4
            },
            "end": {
              "line": 100,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_4", ["loc", [null, [94, 14], [94, 27]]]]], [], 0, null, ["loc", [null, [94, 6], [98, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 111,
                "column": 6
              },
              "end": {
                "line": 115,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element6, 'data-id');
            morphs[1] = dom.createMorphAt(element6, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [112, 36], [112, 46]]]]]]], ["content", "actionname", ["loc", [null, [113, 8], [113, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 107,
              "column": 4
            },
            "end": {
              "line": 117,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_5", ["loc", [null, [111, 14], [111, 27]]]]], [], 0, null, ["loc", [null, [111, 6], [115, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 175,
                "column": 6
              },
              "end": {
                "line": 179,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element5 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element5, 'data-id');
            morphs[1] = dom.createMorphAt(element5, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [176, 36], [176, 46]]]]]]], ["content", "actionname", ["loc", [null, [177, 8], [177, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 171,
              "column": 4
            },
            "end": {
              "line": 181,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_1", ["loc", [null, [175, 14], [175, 27]]]]], [], 0, null, ["loc", [null, [175, 6], [179, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 192,
                "column": 6
              },
              "end": {
                "line": 196,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element4, 'data-id');
            morphs[1] = dom.createMorphAt(element4, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [193, 36], [193, 46]]]]]]], ["content", "actionname", ["loc", [null, [194, 8], [194, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 188,
              "column": 4
            },
            "end": {
              "line": 198,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_7", ["loc", [null, [192, 14], [192, 27]]]]], [], 0, null, ["loc", [null, [192, 6], [196, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 216,
                "column": 6
              },
              "end": {
                "line": 220,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element3, 'data-id');
            morphs[1] = dom.createMorphAt(element3, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [217, 36], [217, 46]]]]]]], ["content", "actionname", ["loc", [null, [218, 8], [218, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 212,
              "column": 4
            },
            "end": {
              "line": 222,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_2", ["loc", [null, [216, 14], [216, 27]]]]], [], 0, null, ["loc", [null, [216, 6], [220, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child8 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 240,
                "column": 6
              },
              "end": {
                "line": 244,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element2, 'data-id');
            morphs[1] = dom.createMorphAt(element2, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [241, 36], [241, 46]]]]]]], ["content", "actionname", ["loc", [null, [242, 8], [242, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 236,
              "column": 4
            },
            "end": {
              "line": 246,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_9", ["loc", [null, [240, 14], [240, 27]]]]], [], 0, null, ["loc", [null, [240, 6], [244, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child9 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 257,
                "column": 6
              },
              "end": {
                "line": 261,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element1, 'data-id');
            morphs[1] = dom.createMorphAt(element1, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [258, 36], [258, 46]]]]]]], ["content", "actionname", ["loc", [null, [259, 8], [259, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 253,
              "column": 4
            },
            "end": {
              "line": 263,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_4", ["loc", [null, [257, 14], [257, 27]]]]], [], 0, null, ["loc", [null, [257, 6], [261, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child10 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 274,
                "column": 6
              },
              "end": {
                "line": 278,
                "column": 6
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'data-id');
            morphs[1] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [275, 36], [275, 46]]]]]]], ["content", "actionname", ["loc", [null, [276, 8], [276, 22]]]]],
          locals: ["actionname"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 270,
              "column": 4
            },
            "end": {
              "line": 280,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("请选择");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "itemActions_5", ["loc", [null, [274, 14], [274, 27]]]]], [], 0, null, ["loc", [null, [274, 6], [278, 15]]]]],
        locals: [],
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
            "line": 314,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind11_t");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui list clearfix settingdetail");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("2.4G：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui divider");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("无线名称：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui input");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "text");
        dom.setAttribute(el6, "placeholder", "");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("是否广播SSID：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("加密方式：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("传输功率：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item itemmessage");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode(" \n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("如非必要，请勿改动下列设置");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("网络模式：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("信道：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("频道带宽：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui left pointing basic label droplabel");
        var el6 = dom.createTextNode("\n			    	会根据当前无线网络环境自动选择20M,40M或80M频宽\n			    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("beacon时槽：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "field uninput");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "text");
        dom.setAttribute(el6, "class", "fl smallinput");
        dom.setAttribute(el6, "placeholder", "100");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "itemlabel");
        var el7 = dom.createTextNode(" ms(范围：20-1024)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui divider");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("5G：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui divider");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("无线名称：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui input");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "text");
        dom.setAttribute(el6, "placeholder", "");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("是否广播：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("加密方式：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("加密算法：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("密码：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright passwordinput");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("传输功率：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item itemmessage");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode(" \n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("如非必要，请勿改动下列设置");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("网络模式：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("信道：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("频道带宽：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("  \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui left pointing basic label droplabel");
        var el6 = dom.createTextNode("\n			    	会根据当前无线网络环境自动选择20M,40M或80M频宽\n			    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("beacon时槽：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "field uninput");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "text");
        dom.setAttribute(el6, "class", "fl smallinput");
        dom.setAttribute(el6, "placeholder", "100");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "itemlabel");
        var el7 = dom.createTextNode(" ms(范围：20-1024)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "centerbtn");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button bgblue");
        var el5 = dom.createTextNode("\n				保存设置\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
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
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element11 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(17);
        morphs[0] = dom.createMorphAt(dom.childAt(element11, [1, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element11, [7, 3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element11, [9, 3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element11, [11, 3]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element11, [15, 3]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element11, [17, 3]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element11, [19, 3]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element11, [25, 3]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element11, [27, 3]), 1, 1);
        morphs[9] = dom.createMorphAt(dom.childAt(element11, [33, 3]), 1, 1);
        morphs[10] = dom.createMorphAt(dom.childAt(element11, [35, 3]), 1, 1);
        morphs[11] = dom.createMorphAt(dom.childAt(element11, [37, 3]), 1, 1);
        morphs[12] = dom.createMorphAt(dom.childAt(element11, [39, 3]), 1, 1);
        morphs[13] = dom.createMorphAt(dom.childAt(element11, [41, 3]), 1, 1);
        morphs[14] = dom.createMorphAt(dom.childAt(element11, [45, 3]), 1, 1);
        morphs[15] = dom.createMorphAt(dom.childAt(element11, [47, 3]), 1, 1);
        morphs[16] = dom.createMorphAt(dom.childAt(element11, [49, 3]), 1, 1);
        return morphs;
      },
      statements: [["content", "input-toggle", ["loc", [null, [7, 4], [7, 20]]]], ["content", "input-toggle", ["loc", [null, [25, 4], [25, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [32, 46], [32, 72]]]]], 0, null, ["loc", [null, [32, 4], [42, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [49, 46], [49, 72]]]]], 1, null, ["loc", [null, [49, 4], [59, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [73, 46], [73, 72]]]]], 2, null, ["loc", [null, [73, 4], [83, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [90, 46], [90, 72]]]]], 3, null, ["loc", [null, [90, 4], [100, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [107, 46], [107, 72]]]]], 4, null, ["loc", [null, [107, 4], [117, 20]]]], ["content", "input-toggle", ["loc", [null, [139, 4], [139, 20]]]], ["inline", "ui-checkbox", [], ["label", "应用与2.4G相同的设置", "class", "uninput"], ["loc", [null, [146, 4], [146, 56]]]], ["content", "input-toggle", ["loc", [null, [164, 4], [164, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [171, 46], [171, 72]]]]], 5, null, ["loc", [null, [171, 4], [181, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [188, 46], [188, 72]]]]], 6, null, ["loc", [null, [188, 4], [198, 20]]]], ["content", "input-password", ["loc", [null, [205, 4], [205, 22]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [212, 46], [212, 72]]]]], 7, null, ["loc", [null, [212, 4], [222, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [236, 46], [236, 72]]]]], 8, null, ["loc", [null, [236, 4], [246, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [253, 46], [253, 72]]]]], 9, null, ["loc", [null, [253, 4], [263, 20]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [270, 46], [270, 72]]]]], 10, null, ["loc", [null, [270, 4], [280, 20]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]
    };
  })());
});
define("borrowers/templates/funcs/func/kind12", ["exports"], function (exports) {
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
            "line": 44,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind12.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind12_t");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui list clearfix settingdetail");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("输入原始密码：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright passwordinput");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("输入新密码：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright passwordinput");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("再次输入：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright passwordinput");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "centerbtn");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button bgblue");
        var el5 = dom.createTextNode("\n				保存设置\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 3]), 1, 1);
        return morphs;
      },
      statements: [["content", "input-password", ["loc", [null, [7, 4], [7, 22]]]], ["content", "input-password", ["loc", [null, [14, 4], [14, 22]]]], ["content", "input-password", ["loc", [null, [21, 4], [21, 22]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/funcs/func/kind13", ["exports"], function (exports) {
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
            "line": 24,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind13.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind13_t");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui list clearfix settingdetail");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item center");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("软件版本");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("20151121061545");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("立即检查更新");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
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
define("borrowers/templates/funcs/func/kind14", ["exports"], function (exports) {
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
            "line": 20,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind14.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind14_t");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui list clearfix settingdetail");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "centerbtn");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button bgblue");
        var el5 = dom.createTextNode("\n				一键恢复出厂设置\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
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
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
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
define("borrowers/templates/funcs/func/kind15", ["exports"], function (exports) {
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
            "line": 42,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind15.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind15_t");
        dom.setAttribute(el1, "class", "ui horizontal list");
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("接受字节数");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("0.00KB");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("发送字节数");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("2.79GB");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("接受数据包数");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("0");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "content");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("发送数据包数");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center");
        var el5 = dom.createTextNode("815B");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
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
define("borrowers/templates/funcs/func/kind16", ["exports"], function (exports) {
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
            "line": 81,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind16.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui horizontal list");
        dom.setAttribute(el1, "id", "kind16_t");
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui list showdetail");
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("IP地址：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					123\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("子网掩码：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					255.255.255.0\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("网关：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					0.0.0.0\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("连接类型：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					dhcp\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui list showdetail");
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("DNA1服务器：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					0.0.0.0\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("DNA2服务器：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("数据包MTU：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					1500\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("MAC地址：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					4A:8C:D0:99:0D:8C\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			\n		");
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
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
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
define("borrowers/templates/funcs/func/kind17", ["exports"], function (exports) {
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
            "line": 60,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind17.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui horizontal list");
        dom.setAttribute(el1, "id", "kind17_t");
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui list showdetail");
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("网关地址：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					192.168.68.1\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("子网掩码：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					255.255.255.0\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("DHCP：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					开启\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui list showdetail");
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("IP地址租赁期时长：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					12小时\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("MAC地址：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					00:50:F1:80:00:00\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n		");
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
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
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
define("borrowers/templates/funcs/func/kind18", ["exports"], function (exports) {
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
            "line": 137,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind18.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui horizontal list");
        dom.setAttribute(el1, "id", "kind18_t");
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui list showdetail");
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("2.4G：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					开启\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("无线名称：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					liu_2G\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("无线登录密码：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					关闭\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("无线信号功率：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					100\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("信道：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					自动\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("模式：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					11B/G/N default\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("频道带宽：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					20/40Mhz\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("BSSID：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					542a:a2:53:00:7c\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui list showdetail");
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("5G：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("无线名称：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("无线登录密码：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("无线信号功率：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("信道：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("模式：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("频道带宽：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("BBSID：");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "itemright");
        var el6 = dom.createTextNode("\n					---\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n		");
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
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
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
define("borrowers/templates/funcs/func/kind2", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind2.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon desktop myblue");
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
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 11,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind2.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "icon mobile myblue");
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
                    "line": 13,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func/kind2.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "icon help circle myblue");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
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
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind2.hbs"
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
            statements: [["block", "if", [["get", "device.kindisknow", ["loc", [null, [11, 14], [11, 31]]]]], [], 0, null, ["loc", [null, [11, 4], [13, 4]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind2.hbs"
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
          statements: [["block", "if", [["get", "device.kindismobile", ["loc", [null, [9, 14], [9, 33]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 4]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 28,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind2.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item clearfix devicedetail");
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui list");
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item clearfix");
          var el5 = dom.createTextNode("\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createTextNode("\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["get", "device.kindiscomputer", ["loc", [null, [7, 10], [7, 31]]]]], [], 0, 1, ["loc", [null, [7, 4], [13, 11]]]], ["inline", "item-icon-edit", [], ["defaultvalue", ["subexpr", "@mut", [["get", "device.devicename", ["loc", [null, [19, 36], [19, 53]]]]], [], []], "label", "设备名称"], ["loc", [null, [19, 6], [19, 68]]]], ["inline", "item-icon-wifi", [], ["defaultvalue", ["subexpr", "@mut", [["get", "device.usedcapacity", ["loc", [null, [22, 36], [22, 55]]]]], [], []], "label", "连接方式", "wifitype", ["subexpr", "@mut", [["get", "device.wifitype", ["loc", [null, [22, 78], [22, 93]]]]], [], []]], ["loc", [null, [22, 6], [22, 95]]]]],
        locals: ["device"],
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
            "line": 42,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind2.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind2_t");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.deviceinfo", ["loc", [null, [3, 9], [3, 25]]]]], [], 0, null, ["loc", [null, [3, 1], [28, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/funcs/func/kind3", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind3.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon desktop myblue");
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
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 11,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind3.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "icon mobile myblue");
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
                    "line": 13,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func/kind3.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "icon help circle myblue");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
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
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind3.hbs"
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
            statements: [["block", "if", [["get", "device.kindisknow", ["loc", [null, [11, 14], [11, 31]]]]], [], 0, null, ["loc", [null, [11, 4], [13, 4]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind3.hbs"
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
          statements: [["block", "if", [["get", "device.kindismobile", ["loc", [null, [9, 14], [9, 33]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 4]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 26,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind3.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item clearfix devicedetail");
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui list");
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("设备类型");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("总容量");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("已用容量");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 1]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 2]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [5, 2]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [7, 2]), 0, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "device.kindiscomputer", ["loc", [null, [7, 10], [7, 31]]]]], [], 0, 1, ["loc", [null, [7, 4], [13, 11]]]], ["content", "device.storagetype", ["loc", [null, [18, 30], [18, 52]]]], ["content", "device.devicename", ["loc", [null, [19, 50], [19, 71]]]], ["content", "device.totalcapacity", ["loc", [null, [20, 49], [20, 73]]]], ["content", "device.usedcapacity", ["loc", [null, [21, 50], [21, 73]]]]],
        locals: ["device"],
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
            "line": 39,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind3.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind3_t");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.deviceinfo", ["loc", [null, [3, 9], [3, 25]]]]], [], 0, null, ["loc", [null, [3, 1], [26, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/funcs/func/kind4", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon desktop myblue");
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
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 11,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "icon mobile myblue");
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
                    "line": 13,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "icon help circle myblue");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
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
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
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
            statements: [["block", "if", [["get", "device.kindisknow", ["loc", [null, [11, 14], [11, 31]]]]], [], 0, null, ["loc", [null, [11, 4], [13, 4]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
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
          statements: [["block", "if", [["get", "device.kindismobile", ["loc", [null, [9, 14], [9, 33]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 4]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 41,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item clearfix devicedetail");
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui list");
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item clearfix");
          var el5 = dom.createTextNode("\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createTextNode("\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("MAC地址");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createTextNode("\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("IP地址");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createTextNode("\n						");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fr");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui button bgblue");
          var el4 = dom.createTextNode("家长设置");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui button bgblue");
          var el4 = dom.createTextNode("加入黑名单");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 1]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 3]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [5, 3]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [7]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["get", "device.kindiscomputer", ["loc", [null, [7, 10], [7, 31]]]]], [], 0, 1, ["loc", [null, [7, 4], [13, 11]]]], ["inline", "item-icon-edit", [], ["defaultvalue", ["subexpr", "@mut", [["get", "device.devicename", ["loc", [null, [19, 36], [19, 53]]]]], [], []], "label", "设备名称"], ["loc", [null, [19, 6], [19, 68]]]], ["content", "device.MAC", ["loc", [null, [23, 13], [23, 27]]]], ["content", "device.IP", ["loc", [null, [27, 13], [27, 26]]]], ["inline", "item-icon-wifi", [], ["defaultvalue", ["subexpr", "@mut", [["get", "device.usedcapacity", ["loc", [null, [30, 36], [30, 55]]]]], [], []], "label", "连接方式", "wifitype", ["subexpr", "@mut", [["get", "device.wifitype", ["loc", [null, [30, 78], [30, 93]]]]], [], []]], ["loc", [null, [30, 6], [30, 95]]]]],
        locals: ["device"],
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
            "line": 53,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind4_t");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.deviceinfo", ["loc", [null, [3, 9], [3, 25]]]]], [], 0, null, ["loc", [null, [3, 1], [41, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/funcs/func/kind5", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind5.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon desktop myblue");
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
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 11,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind5.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "icon mobile myblue");
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
                    "line": 13,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func/kind5.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "icon help circle myblue");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
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
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind5.hbs"
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
            statements: [["block", "if", [["get", "device.kindisknow", ["loc", [null, [11, 14], [11, 31]]]]], [], 0, null, ["loc", [null, [11, 4], [13, 4]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind5.hbs"
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
          statements: [["block", "if", [["get", "device.kindismobile", ["loc", [null, [9, 14], [9, 33]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 4]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 29,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind5.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item clearfix devicedetail");
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui list");
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("设备名称");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("MAC地址");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fr");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui button bgblue");
          var el4 = dom.createTextNode("家长设置");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui button bgblue");
          var el4 = dom.createTextNode("加入黑名单");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 2]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 2]), 0, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "device.kindiscomputer", ["loc", [null, [7, 10], [7, 31]]]]], [], 0, 1, ["loc", [null, [7, 4], [13, 11]]]], ["content", "device.devicename", ["loc", [null, [18, 50], [18, 71]]]], ["content", "device.MAC", ["loc", [null, [19, 51], [19, 65]]]]],
        locals: ["device"],
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
            "line": 43,
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind5_t");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.deviceinfo", ["loc", [null, [3, 9], [3, 25]]]]], [], 0, null, ["loc", [null, [3, 1], [29, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/funcs/func/kind6", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon desktop myblue");
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
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 4
                },
                "end": {
                  "line": 12,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "icon mobile myblue");
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
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 12,
                    "column": 4
                  },
                  "end": {
                    "line": 14,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "icon help circle myblue");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
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
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 12,
                  "column": 4
                },
                "end": {
                  "line": 14,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
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
            statements: [["block", "if", [["get", "device.kindisknow", ["loc", [null, [12, 14], [12, 31]]]]], [], 0, null, ["loc", [null, [12, 4], [14, 4]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 4
              },
              "end": {
                "line": 14,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
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
          statements: [["block", "if", [["get", "device.kindismobile", ["loc", [null, [10, 14], [10, 33]]]]], [], 0, 1, ["loc", [null, [10, 4], [14, 4]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 32,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item clearfix devicedetail");
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui list");
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("设备名称");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("MAC地址");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "blacklistbtn centerbtn");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui button bgblue");
          var el3 = dom.createTextNode("\n				移除黑名单\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 2]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 2]), 0, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "device.kindiscomputer", ["loc", [null, [8, 10], [8, 31]]]]], [], 0, 1, ["loc", [null, [8, 4], [14, 11]]]], ["content", "device.devicename", ["loc", [null, [19, 50], [19, 71]]]], ["content", "device.MAC", ["loc", [null, [20, 51], [20, 65]]]]],
        locals: ["device"],
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
            "line": 44,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind6.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind6_t");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.deviceinfo", ["loc", [null, [3, 9], [3, 25]]]]], [], 0, null, ["loc", [null, [3, 1], [32, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/funcs/func/kind7", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind7.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon desktop myblue");
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
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 11,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind7.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "icon mobile myblue");
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
                    "line": 13,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func/kind7.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "icon help circle myblue");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
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
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind7.hbs"
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
            statements: [["block", "if", [["get", "device.kindisknow", ["loc", [null, [11, 14], [11, 31]]]]], [], 0, null, ["loc", [null, [11, 4], [13, 4]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind7.hbs"
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
          statements: [["block", "if", [["get", "device.kindismobile", ["loc", [null, [9, 14], [9, 33]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 4]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 26,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind7.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item clearfix devicedetail");
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fl");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui list");
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("设备类型");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("总容量");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "item");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("已用容量");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("：");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("label");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 1]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 2]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [5, 2]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [7, 2]), 0, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "device.kindiscomputer", ["loc", [null, [7, 10], [7, 31]]]]], [], 0, 1, ["loc", [null, [7, 4], [13, 11]]]], ["content", "device.storagetype", ["loc", [null, [18, 30], [18, 52]]]], ["content", "device.devicename", ["loc", [null, [19, 50], [19, 71]]]], ["content", "device.totalcapacity", ["loc", [null, [20, 49], [20, 73]]]], ["content", "device.usedcapacity", ["loc", [null, [21, 50], [21, 73]]]]],
        locals: ["device"],
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
            "line": 39,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind7.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind7_t");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.deviceinfo", ["loc", [null, [3, 9], [3, 25]]]]], [], 0, null, ["loc", [null, [3, 1], [26, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/funcs/func/kind8", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 2
            },
            "end": {
              "line": 61,
              "column": 2
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("IP地址：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("子网掩码：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("路由器网关：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("MTU最大传输单元：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field uninput");
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("input");
          dom.setAttribute(el4, "type", "text");
          dom.setAttribute(el4, "class", "fl smallinput");
          dom.setAttribute(el4, "placeholder", "1500");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "ui left pointing basic label");
          var el5 = dom.createTextNode("\n					    	默认值是1500，如无必要请勿改动\n					    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "centerbtn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui button bgblue");
          var el3 = dom.createTextNode("\n					保存设置\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5, 3]), 0, 0);
          return morphs;
        },
        statements: [["content", "device.devicename", ["loc", [null, [30, 27], [30, 48]]]], ["content", "device.totalcapacity", ["loc", [null, [35, 27], [35, 51]]]], ["content", "device.usedcapacity", ["loc", [null, [40, 27], [40, 50]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 88,
                  "column": 7
                },
                "end": {
                  "line": 92,
                  "column": 7
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "item");
              var el2 = dom.createTextNode("\n									");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n								");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element1, 'data-id');
              morphs[1] = dom.createMorphAt(element1, 1, 1);
              return morphs;
            },
            statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [89, 37], [89, 47]]]]]]], ["content", "actionname", ["loc", [null, [90, 9], [90, 23]]]]],
            locals: ["actionname"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 84,
                "column": 5
              },
              "end": {
                "line": 94,
                "column": 5
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "default text");
            var el2 = dom.createTextNode("请选择...");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "dropdown icon");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "menu");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "itemActions_2", ["loc", [null, [88, 15], [88, 28]]]]], [], 0, null, ["loc", [null, [88, 7], [92, 16]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 63,
              "column": 2
            },
            "end": {
              "line": 114,
              "column": 2
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("帐号：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui input");
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("input");
          dom.setAttribute(el4, "type", "text");
          dom.setAttribute(el4, "placeholder", "您的上网帐号");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("密码：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright passwordinput");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("连接模式：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("					");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "");
          var el4 = dom.createTextNode("\n						\n					");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("MTU协商：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "centerbtn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui button bgblue");
          var el3 = dom.createTextNode("\n					保存设置\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [5, 3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7, 3]), 1, 1);
          return morphs;
        },
        statements: [["content", "input-password", ["loc", [null, [77, 5], [77, 23]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [84, 47], [84, 73]]]]], 0, null, ["loc", [null, [84, 5], [94, 21]]]], ["content", "input-toggle", ["loc", [null, [104, 5], [104, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 116,
              "column": 2
            },
            "end": {
              "line": 171,
              "column": 2
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("IP地址：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("子网掩码：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("路由器网关：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("DNS1：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("DNS2：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("MTU最大传输单元：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field uninput");
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("input");
          dom.setAttribute(el4, "type", "text");
          dom.setAttribute(el4, "class", "smallinput fl");
          dom.setAttribute(el4, "placeholder", "1500");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "ui left pointing basic label");
          var el5 = dom.createTextNode("\n					    	默认值是1500，如无必要请勿改动\n					    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "centerbtn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui button bgblue");
          var el3 = dom.createTextNode("\n					保存设置\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5, 3]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7, 3]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(fragment, [9, 3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "input-ip", [], ["isneedbtn", true, "isread", false], ["loc", [null, [121, 5], [121, 45]]]], ["inline", "input-ip", [], ["isneedbtn", true, "isread", false], ["loc", [null, [128, 5], [128, 45]]]], ["inline", "input-ip", [], ["isneedbtn", true, "isread", false], ["loc", [null, [135, 5], [135, 45]]]], ["inline", "input-ip", [], ["isneedbtn", true, "isread", false], ["loc", [null, [142, 5], [142, 45]]]], ["inline", "input-ip", [], ["isneedbtn", true, "isread", false], ["loc", [null, [149, 5], [149, 45]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 190,
                  "column": 7
                },
                "end": {
                  "line": 194,
                  "column": 7
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "item");
              var el2 = dom.createTextNode("\n									");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n								");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'data-id');
              morphs[1] = dom.createMorphAt(element0, 1, 1);
              return morphs;
            },
            statements: [["attribute", "data-id", ["concat", [["get", "actionname", ["loc", [null, [191, 37], [191, 47]]]]]]], ["content", "actionname", ["loc", [null, [192, 9], [192, 23]]]]],
            locals: ["actionname"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 186,
                "column": 5
              },
              "end": {
                "line": 196,
                "column": 5
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "default text");
            var el2 = dom.createTextNode("桥接模式已关闭");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "dropdown icon");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "menu");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "itemActions_4", ["loc", [null, [190, 15], [190, 28]]]]], [], 0, null, ["loc", [null, [190, 7], [194, 16]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 174,
              "column": 2
            },
            "end": {
              "line": 203,
              "column": 2
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("状态：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("WI-FI：");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "itemright");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("					");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui button bgblue itemfreshbtn");
          var el4 = dom.createTextNode("\n						刷新\n					");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 1, 1);
          return morphs;
        },
        statements: [["content", "input-toggle", ["loc", [null, [179, 5], [179, 21]]]], ["block", "ui-dropdown", [], ["class", "selection", "onChange", ["subexpr", "action", ["update_selected"], [], ["loc", [null, [186, 47], [186, 73]]]]], 0, null, ["loc", [null, [186, 5], [196, 21]]]]],
        locals: [],
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
            "line": 218,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind8.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind8_t");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui list clearfix settingdetail");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("连接方式：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui form");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "grouped fields");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "field");
        dom.setAttribute(el7, "connectiontype", "1");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "field");
        dom.setAttribute(el7, "connectiontype", "2");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "field");
        dom.setAttribute(el7, "connectiontype", "3");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "field");
        dom.setAttribute(el7, "connectiontype", "4");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0, 1]);
        var element3 = dom.childAt(element2, [1, 3, 1, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [7]), 1, 1);
        morphs[4] = dom.createMorphAt(element2, 3, 3);
        morphs[5] = dom.createMorphAt(element2, 5, 5);
        morphs[6] = dom.createMorphAt(element2, 7, 7);
        morphs[7] = dom.createMorphAt(element2, 9, 9);
        return morphs;
      },
      statements: [["inline", "input-radio", [], ["label", "DHCP", "name", "connectiontype", "isdefault", true, "setAction", ["subexpr", "action", ["radio_selected"], [], ["loc", [null, [10, 81], [10, 106]]]]], ["loc", [null, [10, 7], [10, 108]]]], ["inline", "input-radio", [], ["label", "拨号上网", "name", "connectiontype", "setAction", ["subexpr", "action", ["radio_selected"], [], ["loc", [null, [13, 66], [13, 91]]]]], ["loc", [null, [13, 7], [13, 93]]]], ["inline", "input-radio", [], ["label", "静态ip地址", "name", "connectiontype", "setAction", ["subexpr", "action", ["radio_selected"], [], ["loc", [null, [16, 68], [16, 93]]]]], ["loc", [null, [16, 7], [16, 95]]]], ["inline", "input-radio", [], ["label", "无线中继", "name", "connectiontype", "setAction", ["subexpr", "action", ["radio_selected"], [], ["loc", [null, [19, 66], [19, 91]]]]], ["loc", [null, [19, 7], [19, 93]]]], ["block", "if", [["get", "isDHCP", ["loc", [null, [26, 8], [26, 14]]]]], [], 0, null, ["loc", [null, [26, 2], [61, 9]]]], ["block", "if", [["get", "isPPPOE", ["loc", [null, [63, 8], [63, 15]]]]], [], 1, null, ["loc", [null, [63, 2], [114, 9]]]], ["block", "if", [["get", "isstaticIP", ["loc", [null, [116, 8], [116, 18]]]]], [], 2, null, ["loc", [null, [116, 2], [171, 9]]]], ["block", "if", [["get", "isrepeater", ["loc", [null, [174, 8], [174, 18]]]]], [], 3, null, ["loc", [null, [174, 2], [203, 9]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("borrowers/templates/funcs/func/kind9", ["exports"], function (exports) {
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
            "line": 63,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind9.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "kind9_t");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui list clearfix settingdetail");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("网关地址：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("子网掩码：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("IP地址开始段：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui input");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "textinput");
        var el7 = dom.createTextNode("192.168.68.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "text");
        dom.setAttribute(el6, "class", "miniinput");
        dom.setAttribute(el6, "value", "10");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("IP地址结束段：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui input");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "textinput");
        var el7 = dom.createTextNode("192.168.68.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "text");
        dom.setAttribute(el6, "class", "miniinput");
        dom.setAttribute(el6, "value", "254");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("DHCP服务器：");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "itemright");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "centerbtn");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button bgblue");
        var el5 = dom.createTextNode("\n				保存设置\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [9, 3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "input-ip", [], ["value1", "192", "value2", "168", "value3", "68", "value4", "2"], ["loc", [null, [7, 4], [7, 65]]]], ["inline", "input-ip", [], ["isread", true, "value1", "255", "value2", "255", "value3", "255", "value4", "0"], ["loc", [null, [14, 4], [14, 78]]]], ["content", "input-toggle", ["loc", [null, [41, 4], [41, 20]]]]],
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
            "line": 3,
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
        var el1 = dom.createTextNode("\n\n");
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
                      "line": 6,
                      "column": 7
                    },
                    "end": {
                      "line": 9,
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
                  var el1 = dom.createTextNode("			    	");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("span");
                  dom.setAttribute(el1, "class", "kindicon");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n			    	");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element0 = dom.childAt(fragment, [1]);
                  var morphs = new Array(2);
                  morphs[0] = dom.createAttrMorph(element0, 'style');
                  morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                  return morphs;
                },
                statements: [["attribute", "style", ["concat", ["background-position-y:", ["get", "kind.icon_y", ["loc", [null, [7, 62], [7, 73]]]]]]], ["inline", "link-to", [["get", "kind.name", ["loc", [null, [8, 18], [8, 27]]]], "funcs.func.kindall", ["get", "model.func_slug", ["loc", [null, [8, 49], [8, 64]]]], ["get", "row.row_slug", ["loc", [null, [8, 65], [8, 77]]]], ["get", "kind.kind_slug", ["loc", [null, [8, 78], [8, 92]]]]], [], ["loc", [null, [8, 8], [8, 95]]]]],
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
                    "line": 5,
                    "column": 3
                  },
                  "end": {
                    "line": 10,
                    "column": 3
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
              statements: [["block", "ivy-tab", [], [], 0, null, ["loc", [null, [6, 7], [9, 16]]]]],
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
                  "line": 4,
                  "column": 2
                },
                "end": {
                  "line": 13,
                  "column": 2
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
              var el1 = dom.createTextNode("			");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n			");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
              dom.insertBoundary(fragment, 0);
              return morphs;
            },
            statements: [["block", "each", [["get", "row.kinds", ["loc", [null, [5, 11], [5, 20]]]]], [], 0, null, ["loc", [null, [5, 3], [10, 12]]]], ["inline", "page-toggle", [], ["class", "icon_list"], ["loc", [null, [11, 3], [11, 36]]]], ["inline", "page-refresh", [], ["class", "icon_list"], ["loc", [null, [12, 3], [12, 37]]]]],
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
                    "line": 16,
                    "column": 3
                  },
                  "end": {
                    "line": 18,
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
                var el1 = dom.createTextNode("				");
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
              statements: [["inline", "outlet", [["get", "kind.id", ["loc", [null, [17, 13], [17, 20]]]]], [], ["loc", [null, [17, 4], [17, 22]]]]],
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
                  "line": 15,
                  "column": 2
                },
                "end": {
                  "line": 19,
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
            statements: [["block", "ivy-tab-panel", [], [], 0, null, ["loc", [null, [16, 3], [18, 21]]]]],
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
                "line": 21,
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
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
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
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "ivy-tab-list", [], [], 0, null, ["loc", [null, [4, 2], [13, 19]]]], ["block", "each", [["get", "row.kinds", ["loc", [null, [15, 10], [15, 19]]]]], [], 1, null, ["loc", [null, [15, 2], [19, 11]]]]],
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
              "line": 22,
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
        statements: [["block", "ivy-tabs", [], [], 0, null, ["loc", [null, [2, 1], [21, 14]]]]],
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
            "line": 22,
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
      statements: [["block", "each", [["get", "model.rows", ["loc", [null, [1, 8], [1, 18]]]]], [], 0, null, ["loc", [null, [1, 0], [22, 9]]]]],
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
            "column": 99
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
        dom.setAttribute(el1, "class", "center");
        dom.setAttribute(el1, "style", "width:100%;line-height:820px;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/loginlogo.png");
        dom.setAttribute(el2, "alt", "");
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
            "line": 5,
            "column": 6
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
        dom.setAttribute(el1, "id", "main");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 9,
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
            dom.setAttribute(el2, "class", "navimg");
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
          statements: [["content", "func.name", ["loc", [null, [7, 7], [7, 20]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 10,
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
        statements: [["block", "link-to", ["funcs.func", ["get", "func.func_slug", ["loc", [null, [4, 26], [4, 40]]]]], [], 0, null, ["loc", [null, [4, 2], [9, 14]]]]],
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
            "line": 28,
            "column": 9
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
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n	$(function(){\n		$(\"#nav .navimg\").each(function(i){\n			$(this).css(\"background-position-y\",-i*57+\"px\");\n		});\n\n		$(\"#nav .item\").mouseover(function(){\n			console.log(\"111\");\n			$(this).parent().addClass(\"current\");\n		}).mouseout(function(){\n			$(this).parent().removeClass(\"current\");\n		});\n	})\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [3, 9], [3, 14]]]]], [], 0, null, ["loc", [null, [3, 1], [10, 10]]]]],
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