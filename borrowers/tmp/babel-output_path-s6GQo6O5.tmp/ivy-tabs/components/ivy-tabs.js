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