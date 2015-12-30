define('ember-cli-app-version/components/app-version', ['exports', 'ember', 'ember-cli-app-version/templates/app-version'], function (exports, _ember, _emberCliAppVersionTemplatesAppVersion) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',
    layout: _emberCliAppVersionTemplatesAppVersion['default']
  });
});
define('ember-cli-app-version/initializer-factory', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = initializerFactory;

  var classify = _ember['default'].String.classify;

  function initializerFactory(name, version) {
    var registered = false;

    return function () {
      if (!registered && name && version) {
        var appName = classify(name);
        _ember['default'].libraries.register(appName, version);
        registered = true;
      }
    };
  }
});
define("ember-cli-app-version/templates/app-version", ["exports"], function (exports) {
  "use strict";

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
        "moduleName": "modules/ember-cli-app-version/templates/app-version.hbs"
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
      statements: [["content", "version", ["loc", [null, [1, 0], [1, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-cli-app-version', ['ember-cli-app-version/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-cli-content-security-policy', ['ember-cli-content-security-policy/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ivy-tabs/components/ivy-tab-list', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @module ivy-tabs
   */

  /**
   * @class IvyTabListComponent
   * @namespace IvyTabs
   * @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'ul',
    attributeBindings: ['aria-multiselectable', 'role'],
    classNames: ['ivy-tab-list'],

    init: function init() {
      this._super();
      _ember['default'].run.once(this, this._registerWithTabsContainer);
    },

    willDestroy: function willDestroy() {
      this._super();
      _ember['default'].run.once(this, this._unregisterWithTabsContainer);
    },

    /**
     * Tells screenreaders that only one tab can be selected at a time.
     *
     * @property aria-multiselectable
     * @type String
     * @default 'false'
     */
    'aria-multiselectable': 'false',

    /**
     * The `role` attribute of the tab list element.
     *
     * See http://www.w3.org/TR/wai-aria/roles#tablist
     *
     * @property role
     * @type String
     * @default 'tablist'
     */
    role: 'tablist',

    /**
     * Gives focus to the selected tab.
     *
     * @method focusSelectedTab
     */
    focusSelectedTab: function focusSelectedTab() {
      this.get('selectedTab').$().focus();
    },

    /**
     * Event handler for navigating tabs via arrow keys. The left (or up) arrow
     * selects the previous tab, while the right (or down) arrow selects the next
     * tab.
     *
     * @method navigateOnKeyDown
     * @param {Event} event
     */
    navigateOnKeyDown: _ember['default'].on('keyDown', function (event) {
      switch (event.keyCode) {
        case 37: /* left */
        case 38:
          /* up */
          this.selectPreviousTab();
          break;
        case 39: /* right */
        case 40:
          /* down */
          this.selectNextTab();
          break;
        default:
          return;
      }

      event.preventDefault();
      _ember['default'].run.scheduleOnce('afterRender', this, this.focusSelectedTab);
    }),

    /**
     * Adds a tab to the `tabs` array.
     *
     * @method registerTab
     * @param {IvyTabs.IvyTabComponent} tab
     */
    registerTab: function registerTab(tab) {
      this.get('tabs').pushObject(tab);
    },

    /**
     * Selects the next tab in the list, if any.
     *
     * @method selectNextTab
     */
    selectNextTab: function selectNextTab() {
      var index = this.get('selected-index') + 1;
      if (index === this.get('tabs.length')) {
        index = 0;
      }
      this.selectTabByIndex(index);
    },

    /**
     * Selects the previous tab in the list, if any.
     *
     * @method selectPreviousTab
     */
    selectPreviousTab: function selectPreviousTab() {
      var index = this.get('selected-index') - 1;

      // Previous from the first tab should select the last tab.
      if (index < 0) {
        index = this.get('tabs.length') - 1;
      }
      // This would only happen if there are no tabs, so stay at 0.
      if (index < 0) {
        index = 0;
      }

      this.selectTabByIndex(index);
    },

    'selected-index': _ember['default'].computed.alias('tabsContainer.selected-index'),

    /**
     * The currently-selected `ivy-tab` instance.
     *
     * @property selectedTab
     * @type IvyTabs.IvyTabComponent
     */
    selectedTab: _ember['default'].computed(function () {
      return this.get('tabs').objectAt(this.get('selected-index'));
    }).property('selected-index', 'tabs.[]'),

    /**
     * Select the given tab.
     *
     * @method selectTab
     * @param {IvyTabs.IvyTabComponent} tab
     */
    selectTab: function selectTab(tab) {
      this.selectTabByIndex(this.get('tabs').indexOf(tab));
    },

    /**
     * Select the tab at `index`.
     *
     * @method selectTabByIndex
     * @param {Number} index
     */
    selectTabByIndex: function selectTabByIndex(index) {
      this.set('selected-index', index);
    },

    /**
     * The `ivy-tabs` component.
     *
     * @property tabsContainer
     * @type IvyTabs.IvyTabsComponent
     * @readOnly
     */
    tabsContainer: _ember['default'].computed.alias('parentView').readOnly(),

    /**
     * Removes a tab from the `tabs` array.
     *
     * @method unregisterTab
     * @param {IvyTabs.IvyTabComponent} tab
     */
    unregisterTab: function unregisterTab(tab) {
      var index = tab.get('index');
      this.get('tabs').removeObject(tab);

      if (index < this.get('selected-index')) {
        this.selectPreviousTab();
      } else if (tab.get('isSelected')) {
        if (index !== 0) {
          this.selectPreviousTab();
        }
      }
    },

    _initTabs: _ember['default'].on('init', function () {
      this.set('tabs', _ember['default'].A());
    }),

    _registerWithTabsContainer: function _registerWithTabsContainer() {
      this.get('tabsContainer').registerTabList(this);
    },

    _unregisterWithTabsContainer: function _unregisterWithTabsContainer() {
      this.get('tabsContainer').unregisterTabList(this);
    }
  });
});
define('ivy-tabs/components/ivy-tab-panel', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @module ivy-tabs
   */

  /**
   * @class IvyTabPanelComponent
   * @namespace IvyTabs
   * @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({
    attributeBindings: ['aria-labelledby', 'role'],
    classNames: ['ivy-tab-panel'],
    classNameBindings: ['active'],

    init: function init() {
      this._super();
      _ember['default'].run.once(this, this._registerWithTabsContainer);
    },

    willDestroy: function willDestroy() {
      this._super();
      _ember['default'].run.once(this, this._unregisterWithTabsContainer);
    },

    /**
     * Tells screenreaders which tab labels this panel.
     *
     * See http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby
     *
     * @property aria-labelledby
     * @type String
     * @readOnly
     */
    'aria-labelledby': _ember['default'].computed.alias('tab.elementId').readOnly(),

    /**
     * See http://www.w3.org/TR/wai-aria/roles#tabpanel
     *
     * @property role
     * @type String
     * @default 'tabpanel'
     */
    role: 'tabpanel',

    /**
     * Accessed as a className binding to apply the panel's `activeClass` CSS
     * class to the element when the panel's `isSelected` property is true.
     *
     * @property active
     * @type String
     * @readOnly
     */
    active: _ember['default'].computed(function () {
      if (this.get('isSelected')) {
        return this.get('activeClass');
      }
    }).property('isSelected'),

    /**
     * The CSS class to apply to a panel's element when its `isSelected` property
     * is `true`.
     *
     * @property activeClass
     * @type String
     * @default 'active'
     */
    activeClass: 'active',

    /**
     * The index of this panel in the `ivy-tabs` component.
     *
     * @property index
     * @type Number
     */
    index: _ember['default'].computed(function () {
      return this.get('tabPanels').indexOf(this);
    }).property('tabPanels.[]'),

    /**
     * Whether or not this panel's associated tab is selected.
     *
     * @property isSelected
     * @type Boolean
     * @readOnly
     */
    isSelected: _ember['default'].computed.alias('tab.isSelected').readOnly(),

    /**
     * If `false`, this panel will appear hidden in the DOM. This is an alias to
     * `isSelected`.
     *
     * @property isVisible
     * @type Boolean
     * @readOnly
     */
    isVisible: _ember['default'].computed.alias('isSelected').readOnly(),

    /**
     * The `ivy-tab` associated with this panel.
     *
     * @property tab
     * @type IvyTabs.IvyTabComponent
     */
    tab: _ember['default'].computed(function () {
      var tabs = this.get('tabs');
      if (tabs) {
        return tabs.objectAt(this.get('index'));
      }
    }).property('tabs.[]', 'index'),

    /**
     * The `ivy-tab-list` component this panel belongs to.
     *
     * @property tabList
     * @type IvyTabs.IvyTabListComponent
     * @readOnly
     */
    tabList: _ember['default'].computed.alias('tabsContainer.tabList').readOnly(),

    /**
     * The array of all `ivy-tab-panel` instances within the `ivy-tabs`
     * component.
     *
     * @property tabPanels
     * @type Array | IvyTabs.IvyTabPanelComponent
     * @readOnly
     */
    tabPanels: _ember['default'].computed.alias('tabsContainer.tabPanels').readOnly(),

    /**
     * The array of all `ivy-tab` instances within the `ivy-tab-list` component.
     *
     * @property tabs
     * @type Array | IvyTabs.IvyTabComponent
     * @readOnly
     */
    tabs: _ember['default'].computed.alias('tabList.tabs').readOnly(),

    /**
     * The `ivy-tabs` component.
     *
     * @property tabsContainer
     * @type IvyTabs.IvyTabsComponent
     * @readOnly
     */
    tabsContainer: _ember['default'].computed.alias('parentView').readOnly(),

    _registerWithTabsContainer: function _registerWithTabsContainer() {
      this.get('tabsContainer').registerTabPanel(this);
    },

    _unregisterWithTabsContainer: function _unregisterWithTabsContainer() {
      this.get('tabsContainer').unregisterTabPanel(this);
    }
  });
});
define('ivy-tabs/components/ivy-tab', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @module ivy-tabs
   */

  /**
   * @class IvyTabComponent
   * @namespace IvyTabs
   * @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    attributeBindings: ['aria-controls', 'aria-expanded', 'aria-selected', 'role', 'selected', 'tabindex'],
    classNames: ['ivy-tab'],
    classNameBindings: ['active'],

    init: function init() {
      this._super();
      _ember['default'].run.once(this, this._registerWithTabList);
    },

    willDestroy: function willDestroy() {
      this._super();
      _ember['default'].run.once(this, this._unregisterWithTabList);
    },

    /**
     * Tells screenreaders which panel this tab controls.
     *
     * See http://www.w3.org/TR/wai-aria/states_and_properties#aria-controls
     *
     * @property aria-controls
     * @type String
     * @readOnly
     */
    'aria-controls': _ember['default'].computed.alias('tabPanel.elementId').readOnly(),

    /**
     * Tells screenreaders whether or not this tab's panel is expanded.
     *
     * See http://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded
     *
     * @property aria-expanded
     * @type String
     * @readOnly
     */
    'aria-expanded': _ember['default'].computed.alias('aria-selected').readOnly(),

    /**
     * Tells screenreaders whether or not this tab is selected.
     *
     * See http://www.w3.org/TR/wai-aria/states_and_properties#aria-selected
     *
     * @property aria-selected
     * @type String
     */
    'aria-selected': _ember['default'].computed(function () {
      return this.get('isSelected') + ''; // coerce to 'true' or 'false'
    }).property('isSelected'),

    /**
     * The `role` attribute of the tab element.
     *
     * See http://www.w3.org/TR/wai-aria/roles#tab
     *
     * @property role
     * @type String
     * @default 'tab'
     */
    role: 'tab',

    /**
     * The `selected` attribute of the tab element. If the tab's `isSelected`
     * property is `true` this will be the literal string 'selected', otherwise
     * it will be `undefined`.
     *
     * @property selected
     * @type String
     */
    selected: _ember['default'].computed(function () {
      if (this.get('isSelected')) {
        return 'selected';
      }
    }).property('isSelected'),

    /**
     * Makes the selected tab keyboard tabbable, and prevents tabs from getting
     * focus when clicked with a mouse.
     *
     * @property tabindex
     * @type Number
     */
    tabindex: _ember['default'].computed(function () {
      if (this.get('isSelected')) {
        return 0;
      }
    }).property('isSelected'),

    /**
     * Accessed as a className binding to apply the tab's `activeClass` CSS class
     * to the element when the tab's `isSelected` property is true.
     *
     * @property active
     * @type String
     * @readOnly
     */
    active: _ember['default'].computed(function () {
      if (this.get('isSelected')) {
        return this.get('activeClass');
      }
    }).property('isSelected'),

    /**
     * The CSS class to apply to a tab's element when its `isSelected` property
     * is `true`.
     *
     * @property activeClass
     * @type String
     * @default 'active'
     */
    activeClass: 'active',

    /**
     * The index of this tab in the `ivy-tab-list` component.
     *
     * @property index
     * @type Number
     */
    index: _ember['default'].computed(function () {
      return this.get('tabs').indexOf(this);
    }).property('tabs.[]'),

    /**
     * Whether or not this tab is selected.
     *
     * @property isSelected
     * @type Boolean
     */
    isSelected: _ember['default'].computed(function () {
      return this.get('tabList.selectedTab') === this;
    }).property('tabList.selectedTab'),

    /**
     * Called when the user clicks on the tab. Selects this tab.
     *
     * @method select
     */
    select: _ember['default'].on('click', 'touchEnd', function () {
      this.get('tabList').selectTab(this);
    }),

    /**
     * The `ivy-tab-list` component this tab belongs to.
     *
     * @property tabList
     * @type IvyTabs.IvyTabListComponent
     * @readOnly
     */
    tabList: _ember['default'].computed.alias('parentView').readOnly(),

    /**
     * The `ivy-tab-panel` associated with this tab.
     *
     * @property tabPanel
     * @type IvyTabs.IvyTabPanelComponent
     */
    tabPanel: _ember['default'].computed(function () {
      return this.get('tabPanels').objectAt(this.get('index'));
    }).property('tabPanels.[]', 'index'),

    /**
     * The array of all `ivy-tab-panel` instances within the `ivy-tabs`
     * component.
     *
     * @property tabPanels
     * @type Array | IvyTabs.IvyTabPanelComponent
     * @readOnly
     */
    tabPanels: _ember['default'].computed.alias('tabsContainer.tabPanels').readOnly(),

    /**
     * The array of all `ivy-tab` instances within the `ivy-tab-list` component.
     *
     * @property tabs
     * @type Array | IvyTabs.IvyTabComponent
     * @readOnly
     */
    tabs: _ember['default'].computed.alias('tabList.tabs').readOnly(),

    /**
     * The `ivy-tabs` component.
     *
     * @property tabsContainer
     * @type IvyTabs.IvyTabsComponent
     * @readOnly
     */
    tabsContainer: _ember['default'].computed.alias('tabList.tabsContainer').readOnly(),

    _registerWithTabList: function _registerWithTabList() {
      this.get('tabList').registerTab(this);
    },

    _unregisterWithTabList: function _unregisterWithTabList() {
      this.get('tabList').unregisterTab(this);
    }
  });
});
define('ivy-tabs/components/ivy-tabs', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @module ivy-tabs
   */

  /**
   * @class IvyTabsComponent
   * @namespace IvyTabs
   * @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['ivy-tabs'],

    init: function init() {
      this._super();
      this._initTabPanels();
    },

    /**
     * Set this to the index of the tab you'd like to be selected. Usually it is
     * bound to a controller property that is used as a query parameter, but can
     * be bound to anything.
     *
     * @property selected-index
     * @type Number
     * @default 0
     */
    'selected-index': 0,

    /**
     * Registers the `ivy-tab-list` instance.
     *
     * @method registerTabList
     * @param {IvyTabs.IvyTabListComponent} tabList
     */
    registerTabList: function registerTabList(tabList) {
      this.set('tabList', tabList);
      _ember['default'].run.once(this, this._selectTabByIndex);
    },

    /**
     * Adds a panel to the `tabPanels` array.
     *
     * @method registerTabPanel
     * @param {IvyTabs.IvyTabPanelComponent} tabPanel
     */
    registerTabPanel: function registerTabPanel(tabPanel) {
      this.get('tabPanels').pushObject(tabPanel);
    },

    /**
     * Removes the `ivy-tab-list` component.
     *
     * @method unregisterTabList
     * @param {IvyTabs.IvyTabListComponent} tabList
     */
    unregisterTabList: function unregisterTabList() /* tabList */{
      this.set('tabList', null);
    },

    /**
     * Removes a panel from the `tabPanels` array.
     *
     * @method unregisterTabPanel
     * @param {IvyTabs.IvyTabPanelComponent} tabPanel
     */
    unregisterTabPanel: function unregisterTabPanel(tabPanel) {
      this.get('tabPanels').removeObject(tabPanel);
    },

    _initTabPanels: function _initTabPanels() {
      this.set('tabPanels', _ember['default'].A());
    },

    _selectTabByIndex: function _selectTabByIndex() {
      var selectedIndex = this.get('selected-index');
      if (_ember['default'].isNone(selectedIndex)) {
        selectedIndex = 0;
      }
      this.get('tabList').selectTabByIndex(selectedIndex);
    }
  });
});
define('ivy-tabs/index', ['exports', 'ivy-tabs/components/ivy-tab', 'ivy-tabs/components/ivy-tab-list', 'ivy-tabs/components/ivy-tab-panel', 'ivy-tabs/components/ivy-tabs'], function (exports, _ivyTabsComponentsIvyTab, _ivyTabsComponentsIvyTabList, _ivyTabsComponentsIvyTabPanel, _ivyTabsComponentsIvyTabs) {
  'use strict';

  exports.IvyTabComponent = _ivyTabsComponentsIvyTab['default'];
  exports.IvyTabListComponent = _ivyTabsComponentsIvyTabList['default'];
  exports.IvyTabPanelComponent = _ivyTabsComponentsIvyTabPanel['default'];
  exports.IvyTabsComponent = _ivyTabsComponentsIvyTabs['default'];
});
define('ivy-tabs', ['ivy-tabs/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('semantic-ui-ember/components/ui-accordion', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  var Accordion = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'accordion',
    classNames: ['ui', 'accordion']
  });

  exports['default'] = Accordion;
});
define('semantic-ui-ember/components/ui-checkbox', ['exports', 'ember', 'semantic-ui-ember/mixins/checkbox-mixin'], function (exports, _ember, _semanticUiEmberMixinsCheckboxMixin) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsCheckboxMixin['default'], {
    type: 'checkbox',
    checked: false,

    _onChange: function _onChange() {
      this.set('checked', this.$('input').prop('checked'));
    }
  });
});
define('semantic-ui-ember/components/ui-dropdown-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    classNames: ['item'],
    tagName: 'div',

    initialize: _ember['default'].on('init', function () {
      _ember['default'].run.scheduleOnce('afterRender', this, this.update_data);
    }),

    update_data: function update_data() {
      if (this.$().data('value')) {
        return;
      }

      this.$().data('value', this.get('content'));
    }
  });
});
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
define('semantic-ui-ember/components/ui-embed', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'embed',
    classNames: ['ui', 'embed'],
    attributeBindings: ['data-id', 'data-source', 'data-placeholder', 'data-url', 'data-icon']
  });
});
define('semantic-ui-ember/components/ui-modal', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'modal',
    classNames: ['ui', 'modal'],
    detachable: false,
    name: null
  });
});
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
define('semantic-ui-ember/components/ui-popup', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'popup',
    attributeBindings: ['content:data-content'],

    contentChanges: _ember['default'].observer('content', function () {
      this.didInsertElement();
    })
  });
});
define('semantic-ui-ember/components/ui-progress', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  var Progress = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'progress',
    classNames: ['ui', 'progress'],
    attributeBindings: ['percent', 'total', 'value']
  });

  exports['default'] = Progress;
});
define('semantic-ui-ember/components/ui-radio', ['exports', 'ember', 'semantic-ui-ember/mixins/checkbox-mixin'], function (exports, _ember, _semanticUiEmberMixinsCheckboxMixin) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsCheckboxMixin['default'], {
    type: 'radio',
    classNames: ['radio'],
    name: 'default',

    init: function init() {
      this._super();

      if (!(this.get('name') && this.get('name') !== 'default')) {
        _ember['default'].Logger.warn('Name was not passed into semantic radio component');
      }
    },

    _onChange: function _onChange() {
      this.set('current', this.get('value'));
    },

    checked: _ember['default'].computed('current', 'value', function () {
      return this.get('current') === this.get('value');
    })
  });
});
define('semantic-ui-ember/components/ui-rating', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  var Rating = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'rating',
    classNames: ['ui', 'rating'],

    init: function init() {
      this._super();

      if (!this.get('initialRating') && this.get('rating')) {
        this.set('initialRating', this.get('rating'));
      }
    }
  });

  exports['default'] = Rating;
});
define('semantic-ui-ember/components/ui-search', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'search',
    classNames: ['ui', 'search'],

    /**
      Proxying all the attributes to apiSettings
    */
    apiSettings: _ember['default'].computed.alias('attrs')
  });
});
define('semantic-ui-ember/components/ui-shape', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'shape',
    classNames: ['ui', 'shape']
  });
});
define('semantic-ui-ember/components/ui-sidebar', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'sidebar',
    classNames: ['ui', 'sidebar']
  });
});
define('semantic-ui-ember/components/ui-sticky', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'sticky',
    classNames: ['ui', 'sticky']
  });
});
define('semantic-ui-ember/mixins/base', ['exports', 'ember', 'semantic-ui-ember/semantic'], function (exports, _ember, _semanticUiEmberSemantic) {
  'use strict';

  _semanticUiEmberSemantic['default'].BaseMixin = _ember['default'].Mixin.create({
    init: function init() {
      this._super();

      if (!this.get('module')) {
        return _ember['default'].Logger.error('Module was not declared on semantic extended type');
      }
    },

    settings: function settings(module) {
      var component, custom, key, prop, value;

      component = window.$.fn[module];
      if (!component) {
        throw "Unable to find semantic module: " + module;
      }

      custom = {
        debug: _semanticUiEmberSemantic['default'].UI_DEBUG,
        performance: _semanticUiEmberSemantic['default'].UI_PERFORMANCE,
        verbose: _semanticUiEmberSemantic['default'].UI_VERBOSE
      };

      for (key in component.settings) {
        prop = component.settings[key];
        if (window.$.inArray(key, _semanticUiEmberSemantic['default'].BaseMixin.DEBUG) >= 0) {
          continue;
        }

        if (window.$.inArray(key, _semanticUiEmberSemantic['default'].BaseMixin.STANDARD) >= 0) {
          continue;
        }

        if (typeof prop === 'function' && typeof (this.get(key) || this.get('_' + key)) !== 'function') {
          continue;
        }

        if (window.$.inArray(key, _semanticUiEmberSemantic['default'].BaseMixin.EMBER) >= 0) {
          value = this.get('ui_' + key);
        } else {
          if (typeof this.get(key) !== 'undefined') {
            value = this.get(key);
          } else {
            value = this.get('_' + key);
          }
        }

        if (value != null) {
          if (typeof value === 'function') {
            custom[key] = _ember['default'].run.bind(this, this.updateFunctionWithParameters(key, value));
          } else {
            custom[key] = value;
          }
        }
      }

      return custom;
    },

    updateProperty: function updateProperty(property) {
      return function () {
        this.execute('set ' + property, this.get(property));
      };
    },

    updateFunctionWithParameters: function updateFunctionWithParameters(key, fn) {
      return function () {
        var args = [].splice.call(arguments, 0);
        var internal = this.get('_' + key);

        if (internal) {
          internal.apply(this, args);
        }

        if (internal !== fn) {
          return fn.apply(this, [this].concat(args));
        }

        return true;
      };
    },

    didInsertElement: function didInsertElement() {
      this.$()[this.get("module")](this.settings(this.get("module")));

      var _this = this;
      var properties = this.execute('set');
      var property;

      for (property in properties) {
        if (!properties.hasOwnProperty(property)) {
          continue;
        }

        _this.addObserver(property, _this, _this.updateProperty(property));
      }
    },

    willDestroyElement: function willDestroyElement() {
      var name, selector;
      if ((selector = this.$()) != null) {
        if (typeof selector[name = this.get("module")] === "function") {
          return selector[name]('destroy');
        }
      }
    },

    execute: function execute() {
      var selector, module;
      if ((selector = this.$()) != null) {
        if ((module = selector[this.get('module')]) != null) {
          return module.apply(this.$(), arguments);
        }
      }
    }
  });

  // Static properties to ignore
  _semanticUiEmberSemantic['default'].BaseMixin.DEBUG = ['debug', 'performance', 'verbose'];
  _semanticUiEmberSemantic['default'].BaseMixin.STANDARD = ['name', 'namespace', 'className', 'error', 'metadata', 'selector'];
  _semanticUiEmberSemantic['default'].BaseMixin.EMBER = ['context', 'on', 'template', 'execute'];

  exports['default'] = _semanticUiEmberSemantic['default'].BaseMixin;
});
define('semantic-ui-ember/mixins/checkbox-mixin', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  /*
   * Checkbox Component Mixin
   */
  var CheckboxMixin = _ember['default'].Mixin.create(_semanticUiEmberMixinsBase['default'], {
    module: 'checkbox',
    classNames: ['ui', 'checkbox'],

    didInsertElement: function didInsertElement() {
      if (this.get("disabled")) {
        return;
      }
      this._super();
    },

    willDestroyElement: function willDestroyElement() {
      if (this.get("disabled")) {
        return;
      }
      this._super();
    }
  });

  exports['default'] = CheckboxMixin;
});
define('semantic-ui-ember/mixins/data-attributes', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Mixin.create({
    attributeBindings: ['data-test']
  });
});
define('semantic-ui-ember/semantic', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Semantic = _ember['default'].Namespace.create({
    UI_DEBUG: false,
    UI_PERFORMANCE: false,
    UI_VERBOSE: false
  });

  exports['default'] = Semantic;
});
define('semantic-ui-ember', ['semantic-ui-ember/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});
//# sourceMappingURL=addons.map