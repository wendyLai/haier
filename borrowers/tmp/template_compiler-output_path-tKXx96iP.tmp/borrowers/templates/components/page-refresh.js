export default Ember.HTMLBars.template((function() {
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
          "column": 57
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
      dom.setAttribute(el1,"class","icon refresh");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("i");
      dom.setAttribute(el1,"class","icon chevron down");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(fragment, [2]);
      var morphs = new Array(2);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createElementMorph(element1);
      return morphs;
    },
    statements: [
      ["element","action",["doRefresh"],[],["loc",[null,[1,24],[1,46]]]],
      ["element","action",["listToggle"],[],["loc",[null,[2,29],[2,52]]]]
    ],
    locals: [],
    templates: []
  };
}()));