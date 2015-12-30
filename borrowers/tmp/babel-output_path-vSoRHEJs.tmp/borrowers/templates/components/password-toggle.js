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