define('ivy-tabs/index', ['exports', 'ivy-tabs/components/ivy-tab', 'ivy-tabs/components/ivy-tab-list', 'ivy-tabs/components/ivy-tab-panel', 'ivy-tabs/components/ivy-tabs'], function (exports, _ivyTabsComponentsIvyTab, _ivyTabsComponentsIvyTabList, _ivyTabsComponentsIvyTabPanel, _ivyTabsComponentsIvyTabs) {
  'use strict';

  exports.IvyTabComponent = _ivyTabsComponentsIvyTab['default'];
  exports.IvyTabListComponent = _ivyTabsComponentsIvyTabList['default'];
  exports.IvyTabPanelComponent = _ivyTabsComponentsIvyTabPanel['default'];
  exports.IvyTabsComponent = _ivyTabsComponentsIvyTabs['default'];
});